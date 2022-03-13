/* 
    Regular Expression (RegExp) - A small programming language that helps to find pattern in data

    RegExp Parameters - 
        1. Pattern - It could be a text or any form of pattern
        2. Flag - It is an Optional parameter of RegExp which determine the type of Searching
            I.   g - Glabal flag means search for pattern in whole text
            II.  i - Case Insensitive flag
            III. m - Multiline
*/

// Creating Pattern with RegExp Constructor

let pattern = "ashish";
let flag = "gi";

let regEx1 = new RegExp(pattern, flag);
console.log(regEx1);

// Creating Pattern without Constructor

let regEx2 = /ashish/gi;
console.log(regEx2);

// RegExp Object Methods

let variable = "Ashish is good boy";
var match = regEx1.test(variable);
console.log(match);

match = variable.match(regEx1);
console.log(match);

match = variable.search(regEx1); // Return the index of matched element of Array of String
console.log(match);

match = variable.replace(regEx1, "You");
console.log(match);
console.log(variable);
