// Convert JSON Data to JS Object
const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
}`;

const userObj = JSON.parse(usersText);

console.log(userObj);
const userObj1 = JSON.parse(usersText, (key, value) => {
    let newValue = typeof value == 'string' && key!='email' ? value.toUpperCase() : value;
    return newValue;
});
console.log(userObj1);

// Convert JS Objects to JSON
let toJSON = JSON.stringify(userObj, ' ', 4);
console.log(toJSON);

// Filtering the data
toJSON = JSON.stringify(userObj, ["users", "firstName", "lastName"], 4);
console.log(toJSON);
