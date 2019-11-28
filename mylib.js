"use strict"

//Returns an array in the range of low to high (defaults 1 to 10) step is optional
//and allows output to increment by a set amount each time i.e. low = 2, high = 10, step = 2
//would have an output of [2,4,6,8,10]
function range(low = 1, high = 10, step = 1) {
  const arr = [];

  for (let i = low; i <= high; i += step) {
    arr.push(i);
  }

  return arr;
}

function sum(array) {
  return array.reduce((sum, acc) => sum + acc);
}



export { range, sum };

  

