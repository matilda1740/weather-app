
// store data in local storage

localStorage.setItem('name', 'Cole');
localStorage.setItem('age', 28);


// get data from local storage 

let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(`My name is ${name} and I am ${age}`);

// updating data

// localStorage.setItem('name', 'Klaus');
// name = localStorage.getItem('name');
// // or 
// localStorage.age = 50;
// age = localStorage.getItem('age');
// console.log(name, age);


// Deleting Items 

// Single Item 

localStorage.removeItem('name');
name = localStorage.getItem('name');
console.log(name);

// Multiple 

localStorage.clear();

name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(`My name is ${name} and I am ${age}`);

const todos = [
    {"food" : "mashed potatoes", "chef": "Alex G."},
    {"food" : "grilled pork chops", "chef": "Kelsey M."},
    {"food" : "Veggies", "chef": "Finneas"},
]

// console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos));

const getStoredData = localStorage.getItem('todos');
console.log(JSON.parse(getStoredData));