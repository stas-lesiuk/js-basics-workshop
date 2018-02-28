var orders = [{id: 1, user: 'Some user'}, {id: 3, user: 'third user'}];

function isIdPresentWithUsualFunc(items, id) {
  return !!items.filter(function (item) {
    return item.id === id;
  }).length;
}

function isIdPresentWithLambda(items, id) {
  return !!items.filter(item => {
    return item.id === id;
}).length;
}

console.log(isIdPresentWithLambda(orders, 2)); //false
console.log(isIdPresentWithLambda(orders, 3)); //true
