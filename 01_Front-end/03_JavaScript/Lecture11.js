/* -------------------------------------------------------------
                Functions in JavaScript
----------------------------------------------------------------
    1. Function Declaration and Invocation
    2. Function Expressions
    3. Arrow Functions
    4. Parameters and Arguments
    5. Return Statement
    6. Higher-Order Functions
    7. Function Methods
*/
//  1. Function Declaration and Invocation 
function sayMyName() {
    console.log("Miraj");
}
// sayMyName    // ---> This is reference of the function
// sayMyName()  // ---> This is function call (invocation)

/* 2. Function expression 
   @ Assigns a function to a variable. 
   @ It can be anonymous or have a name
*/
const goodFriend = function() {
    console.log("Myra");
}
// goodFriend();

/* 3. Arrow function
    @ Concise syntax for writing functions 
    @ They automatically inherit the this value from their surrounding context.
*/
const cow = () => console.log("Cow");
// cow();

const goat = () => {
    console.log("Hey! goat");
}
// goat();

const food = (nonVeg) => `Your favorite non-veg food is ${nonVeg}`;
// console.log(food("chicken biryani"));

/* 4. Parameters and Arguments
    @ Functions can take parameters, which act as placeholders for values passed into the function. 
    @ Arguments are the actual values provided when calling the function.
*/
function mobileName(mobile) { // parameter
    console.log(`My mobile name is ${mobile}`);
}
// mobileName("Samsung"); // argument

/* 5. Return Statement
    @ Functions can return values using the return statement. 
    @ The function stops executing once it encounters a return statement.
*/
function mobileModel(model) {
    return `Samsung ${model}`;
}
// console.log(mobileModel("A50"));

/* 6. Higher-Order Functions:
    @ Higher-order functions can take other functions as arguments or return them.
*/
const applyOperation = (num, operation) => operation(num);

const square = (a) => a * a;

const cube = (a) => a * a * a;

// console.log(applyOperation(2, square));
// console.log(applyOperation(2, cube));

/* 7. Function Methods:
    @ Functions can be properties of objects, called methods.
    @ Learn more from Lecture08 (functions inside object)
*/
const Calculation = {
    add: function(m, k) {
        return m + k;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

// console.log(Calculation.add(3, 2));
// console.log(Calculation.subtract(3, 2));


