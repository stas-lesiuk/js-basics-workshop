function sum(a, b) {
  if(!a) {
    a = 1;
  }
  if(!b) {
    b = 2;
  }
  return a + b;
}

console.log(sum());
console.log(sum(5, ''));
console.log(sum(null, 2));
console.log(sum(11, 2));
