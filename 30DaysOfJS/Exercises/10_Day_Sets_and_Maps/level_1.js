const emptySet = new Set();
console.log(emptySet);

for(let i=0; i<=10; i++){
    emptySet.add(i);
}

console.log(emptySet);
emptySet.delete(5);
console.log(emptySet);
emptySet.clear();
console.log(emptySet);


const newArray = ['JavaScript', 'Python', 'C++', 'Java', 'Go'];
const setFromArray = new Set(newArray);
console.log(setFromArray);

// Map

const countries = ['Finland', 'Sweden', 'Norway'];
const countriesMap = new Map();
countries.forEach(element => countriesMap.set(element, element.length));
console.log(countriesMap);
