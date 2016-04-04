var arr = [1,2,3,4];
console.log(arr);
var arr2 = arr.filter((item) => {return (item%2 === 0)});

console.log(arr2);
console.log(arr2.find((item) => {return item === 2}));
