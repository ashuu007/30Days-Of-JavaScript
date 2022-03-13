/* 
    Destructuring:- Way to unpack Arrays and Objects and assigning to
    a distinct variable.
*/

// Destructuring a simple array
const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;
console.log(numOne, numTwo, numThree);

// Destructuring a array of array
const fullStack = [
  ["HTML", "CSS", "JavaScript", "React"],
  ["Node", "Express", "MongoDB"],
];
let [frontEnd, backEnd] = fullStack;
console.log(frontEnd);
console.log(backEnd);

// Skip a value
let [one, , three] = numbers;
console.log(one, three);

// Inserting the default value
const names = [undefined, "Brook", "David"];
let [
  firstPerson = "Asabeneh",
  secondPerson,
  thirdPerson,
  fourthPerson = "John",
] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

// Spread (...) Operator

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;
console.log(num1, num2, num3);
console.log(rest);

// Destruturing during Iteration

const countries = [
  ["India", "Delhi"],
  ["Finland", "Helsinki"],
  ["America", "New York"],
];
for (const [country, city] of countries) {
  console.log(country, city);
}

// Desturing of an Object

const newCountries = {
  india: "Delhi",
  finland: "Helsinki",
  america: "New York",
};

let { india, finland, america } = newCountries;
console.log(india, finland, america);

// Renaming during Stucutring

let{india:i, finland:f, america:a} = newCountries;
console.log(i, f, a);
