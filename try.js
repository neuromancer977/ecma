var wu = require("wu");

var arr = [1,2,3,4];
console.log(arr);

// array filtering
console.log('// array filtering');
var arr2 = arr.filter((item) => {return (item%2 === 0)});
console.log(arr2);

// find item
console.log('// find item');
var elem = arr.find((item) => {return item === 2})
console.log(elem);

// fibonacci filtering
console.log('// fibonacci filtering');
// fibonacci generator
function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const isEven      = n => n % 2 == 0;
const lessThan10000 = n => n < 10000;

wu(fibs())
  .filter(isEven)
  .takeWhile(lessThan10000)
  .forEach(console.log.bind(console));
