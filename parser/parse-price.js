function parsePrice(price) {
  if (price) {
    return parseInt(price.replace(' ', ''));
  }
  return 0;
}

module.exports = parsePrice;
