"use strict"


function range(low = 1, high = 10, step = 1) {
  const arr = [];

  for (let i = low; i <= high; i += step) {
    arr.push(i);
  }

  return arr;
}

//Sums together all the numbers in an array of numbers
function sum(array) {

  if (!Array.isArray(array)) {
    throw new Error("Not of type array in sum(array)");
  
  } else {
    array.forEach(num => {
    if (!Number.isFinite(num)) {
      throw new Error("Array must only contain numbers in sum(array");
    }
      console.log(num);
    });
  }

  
      

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


