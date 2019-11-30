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

//Sums together all the numbers in an array of numbers
function sum(array) {

  if (!Array.isArray(array)) throw new Error("Not of type array in sum(array)");

  return array.reduce((sum, acc) => sum + acc);
}

//returns an object containing the characters as keys and the tally as values
function countChars(str) {

  if (typeof str !== 'string') throw new Error("Input needs to be a string in countChars(str)");
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    
    if (str[i] == " ") {
      continue;
    }
    else if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }

  return obj;
}




export { range, sum, countChars };


