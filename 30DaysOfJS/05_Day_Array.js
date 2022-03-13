// Creating Empty Array

// Using Array Constructor
const arr1 = Array();
console.log("arr1: ", arr1);


// Using Square Brackets
const arr2 = [];
console.log("arr2: ", arr2);


// Creating Array using Values with different Data Types
let arr3 = ['Asabeneh',
  250,
  true, 
  {
    country: 'Finland',
    city: 'Helsinki'
  },
  {
  	skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python']
  }
];
console.log("arr3: ", arr3);

// Creating Array using Split function
let str = 'JavaScript';
const arr4 = str.split('');
console.log("arr4: ", arr4);


// More way to Create Array

// Create an Array with nth number of Empty Value
const arr5 = Array(8);
console.log("arr5: ", arr5);

// Create an Array with nth number of Static Value
const arr6 = Array(8).fill('X');
console.log("arr6: ", arr6);


// Concatenating Array
const firstList = [1, 2, 3, 4, 5];
const secontList = [5, 6, 7, 8];
const thirdList = firstList.concat(secontList);
console.log(thirdList);


// Getting Index of a Element of an Array
let testArray = ["JavaScript", "Python", "HTML", "CSS", "C++", "Go", "Solidity"];

console.log(testArray.indexOf("Python"));
console.log(testArray.indexOf("Solidity"));

// Check Item in a array
// Return -1 if element is not exists
console.log(testArray.indexOf("C"));

// Getting last Index of an Element in Array
let testArray2 = ["JavaScript", "Python", "HTML", "JavaScript", "CSS", "C++", "Go", "Solidity"];
console.log(testArray2.lastIndexOf("JavaScript"));

// Converting Array to String
let testString = testArray2.toString();
console.log(testString);

// Joining Array Element using join Method
let joinedArrayElement = testArray2.join('');
console.log(joinedArrayElement);
let joinedArrayElement2 = testArray2.join('#');
console.log(joinedArrayElement2);

// Slicing an Array
// slice Method
let newArray = testArray2.slice(2, 5);
console.log(newArray);

// using Splice Method
newArray = testArray2.splice(1, 5, 3);
console.log(newArray);

// Reversing Array
reverseArray = testArray2.reverse();
console.log(reverseArray);

// Sorting Array
sortArray = testArray2.sort();
console.log(sortArray);
