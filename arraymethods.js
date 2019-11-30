"use strict"

//This file demonstrates the methods of array along with their Big O time complexities.

let animals = ["dog", "pig", "cat", "cow", "horse", "chicken", "lion"];

//pushing a new value to the end: O(1) (mutating)
animals.push("bat");
console.log(animals);

//removing a value from the end: O(1) (mutating)
animals.pop();
console.log(animals);

//pushing a value to the beginning: O(n) (mutating)
animals.unshift("lizard");
console.log(animals);

//removing a value from the beginning: O(n) (mutating)
animals.shift();
console.log(animals);

//concatenating another array to the end: O(n) (none mutating)
animals = animals.concat(["bear", "fish"]);
console.log(animals);

//removing a section from an array: O(n) (none mutating)
animals = animals.slice(1,6);
console.log(animals);

//inserting new values into an array: O(n) (mutating)
animals.splice(1, 0, "dragon", "bear");
console.log(animals);

//sorting an array O(n log n) (mutating)
animals.sort();
console.log(animals);

//filtering an array: O(n) (none mutating)
animals = animals.filter(item => item.includes("c"))
console.log(animals);

//mapping an array: O(n) (none mutating)
let indexIsCat = animals.map(item => item === "cat");
console.log(indexIsCat);

//reducing an array: O(n) (none mutating)
let allTogether = animals.reduce((sum, acc) => sum + acc);
console.log(allTogether);

//checking some of the elements are a certain value: O(n) (none mutating)
let someAreCats = animals.some(item => item === "cat");
console.log(someAreCats);

//checking every element is a certain value: O(n) (none mutating)
let allAreCats = animals.every(item => item === "cat");
console.log(allAreCats);

//checking if any element includes a certain value: O(n) (none mutating)
let isThereACow = animals.includes("cow");
console.log(isThereACow);

//reversing an array: O(n) (mutating)
animals.reverse();

//Find the first occurance of a value: O(n) (none mutating)
let cow = animals.find(item => item === "cow");
console.log(cow);

//Find the index of a certain value: O(n) (none mutating)
let chickenIndex = animals.indexOf("chicken", 1); //start at position 1 (optional)
console.log(chickenIndex);

