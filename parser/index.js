const request = require('request');
const cheerio = require('cheerio');
const tress = require('tress');
const fs = require('fs');
const cllc = require('cllc');

const parsePrice = require('./parse-price');
const log = cllc();

const URL = 'https://www.otomoto.pl/osobowe/volkswagen/polo/iv-2001-2009/?search%5Bfilter_float_price%3Afrom%5D=9000&search%5Bfilter_float_price%3Ato%5D=16000';
let results = [];
let visitedLinks = [];

const selectors = {
  title: '.offer-title',
  price: '.offer-price__number',
  year: '.offer-item__params-item:nth-child(1)',
  header: '.offer-header',
  detailPageLink: '.offer-title__link',
  pagination: '.om-pager.rel a'
};

const queue = tress(function (url, callback) {
  request.get(url, function (err, res, body) {
    if (err) {
      throw err;
    }
    const $ = cheerio.load(body);

    //check if detail page
    if ($(selectors.header).length) {
      log.step(0, 1);
      results.push({
        title: $(selectors.title).text().trim(),
        price: parsePrice($(selectors.price).text().trim()),
        year: $(selectors.year).text().trim(),
        href: url
      });
    } else {
      //here we push link to every detail page
      $(selectors.detailPageLink).each(function () {
        const href = $(this).attr('href');
        // console.log('pushing link to detail page: ', href);
        queue.push(href);
      });

      //increase log step if listing page
      if($(selectors.pagination).length) {
        log.step(1);
      }

      //push pagination links
      $(selectors.pagination).each(function () {
        const href = $(this).attr('href');
        // console.log('pushing link to next page: ', href);
        if (!visitedLinks.includes(href)) {
          visitedLinks.push(href);
          queue.push(href);
        }
      });
    }

    callback(); //callback = queue.drain at the end
  });
});

// will be executed when links end
queue.drain = function () {
  const totalSum = results.reduce(
    ((sum, currentItem) => {
      // console.log(sum, currentItem.price);
      return sum + currentItem.price;
    }), 0
  );
  const summary = {
    offersParsed: results.length,
    averagePrice: totalSum / results.length
  };
  fs.writeFileSync('./data.json', JSON.stringify({
    results,
    summary
  }, null, 4));
};

log.start('List pages: %s, detail pages: %s');
// add first URL to queue
queue.push(URL);
