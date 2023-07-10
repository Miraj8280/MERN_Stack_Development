/* ------------------------------------------------------------------
                    Objects in JavaScript
---------------------------------------------------------------------
@ Objects are a way to store and organize related data.
@ They are like containers that can hold various piecies of information called properties.
@ These properties can be any type of data, such as numbers, strings, arrays, or even other objects.
@ Each property consists of a name and a value.
*/

const user = {
    firstName: "Miraj",
    "full name": "Miraj Asraf",
    age: 21,
    city: "Raiganj",
    email: "miraj@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Sunday", "Monday"]
};

// The values can be accessed using dot notation.
// console.log(user.firstName);
// console.log(user.isLoggedIn);
// console.log(user.lastLoggedInDays);

// We can also access object properties using square brackets.
// console.log(user["age"]);
// console.log(user["email"]);
// console.log(user["lastLoggedInDays"]);

// If the property name is string type, then we can't access it using dot(.) notation, we have to access it using square brackets.
// console.log(user["full name"]);

// Add a new property
/*
user.gernder = "Male";
// console.log(user);
// console.log(user.gernder);
*/

// Modify existing property
/*
user.firstName = "Mahir";
user.age = 2;
console.log(user);
console.log(user.firstName);
console.log(user.age);
*/

// Delete a property from the object
/*
delete user.age;
// console.log(user);
// console.log(user.age); // undefined
*/

// Freezing an object means that you cannot add, delete, or modify its properties. 
// This can be useful when you want to ensure that an object's properties remain constant and unchanged.
/*
Object.freeze(user);
// now let's try to modify some properties
user.firstName = "Mahir";
user.email = "mahir@google.com";
// console.log(user); 
// console.log(user.firstName); // Miraj
// console.log(user.email); // miraj@google.com
*/

// Symbol data type can be used as property keys by wrapping them in square brackets []
let mySymbol = Symbol("This is my symbol");
const obj = {
    [mySymbol]: "Hello, symbol!"
};

// console.log(obj.mySymbol);// undefined
// To access the value of a symbol property, you need to use square brackets []
// console.log(obj[mySymbol]);

