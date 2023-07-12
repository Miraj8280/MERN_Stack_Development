/* ------------------------------------------------------------------
                    Objects in JavaScript - III
--------------------------------------------------------------------- 
@ Destructuring is a feature in JavaScript that allows you to extract values from objects and arrays into distinct variables.
@ Destructuring an object:
    const {property_1, property_2, ...} = object_name;
*/


const student = {
    name: "Miraj",
    roll: 36,
    dept: "CSE",
    degree: "B.Tech"
};

// Destructure the Object student
// Extract values from the object and assign them to variables with the same name as the object's property
/*
const { name } = student;
// console.log(name);

const { roll } = student;
// console.log(roll);
*/

// Extract all values together
/*
const { name, roll, dept, degree } = student;
// console.log(name);
// console.log(roll);
// console.log(dept);
// console.log(degree);
// we have created variables 'name', 'roll', 'dept', and 'degree' that holds the corresponding values.
*/

// Change(Rename) the names of the properties
/*
// const { name: stdName } = student;
// console.log(stdName); // Miraj
// console.log(name); // Error(name is not defined) as name is renamed 

const { name: stdName, roll: stdRoll, dept: stdDept, degree: stdDegree } = student;
// console.log(stdName);
// console.log(stdRoll);
// console.log(stdDept);
// console.log(stdDegree);
*/

// Provide default value
/*
const { name: firstName, lastName = "Asraf", roll, dept, degree } = student;
// console.log(firstName);
// console.log(lastName);
*/

// Nested object destructuring
const teacher = {
    name: {
        firstName: "Mobarak",
        lastName: "Ali"
    },
    dept: "CSE",
    age: 56,
    address: {
        city: "Raiganj",
        dist: "U/D",
        state: "W/B"
    } 
};

const { name: { firstName, lastName }, dept, age, address: { city, dist, state } } = teacher;

// console.log(firstName);
// console.log(age);
// console.log(state);
