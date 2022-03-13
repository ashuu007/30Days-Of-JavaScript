/* 
    Promise - Way to handle asynchronous operations in JavaScript

    A Promise is in one of these states -
        1. Pending: initial state, neither fullfilled nor rejected. But can be fullfilled or
           rejected.
        2. Fullfilled: Operation complete succesfully.
        3. Rejected: Operation failed (Error).

    Callbacks -
        Takes two arguments. first is 'err' and second is 'result', if err parameter is false,
        there will not be error other wise it will return err.
*/

// Callback Example -

const doSomthing = (callback) => {
    setTimeout(() => {
        const skills = ["HTML", "CSS", "JS"];
        callback("It did not go well", skills);
        // first parameter is given(true) means it will give an error
    }, 2000);
};

const callback = (err, result) => {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
};

doSomthing(callback);

// Promise Example -

const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ["HTML", "CSS", "JavaScript"];

        if (skills.includes("React")) {
            resolve(skills);
        } else {
            reject("Somthing Wrong has happened");
        }
    }, 2000);
});

doPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => console.log(error));

/*
    Fetch API -
        Provide an interface for fetching resources across the network.
*/

const url = "https://restcountries.com/v2/all";
fetch(url)
    .then((response) => response.json()) // Accessing API data as JSON
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log(error));


// Async and Await - 

const square = async function(n) {
    return n * n;
}

const value = square(2);
console.log(value);

const value2 = await square(2);
console.log(value2);
