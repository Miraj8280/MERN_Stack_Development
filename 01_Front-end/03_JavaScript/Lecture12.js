/*------------------------------------------------------------------------
                            "this" in JavaScript
--------------------------------------------------------------------------
1. Introduction: In JavaScript, "this" is a special keyword that refers to the context in which the current code is executing. The value of "this" is determined dynamically based on how a function is called and in what context it is invoked.

2. Global Context: "this" refers to the global object (window in the browser).

3. Methods: When "this" is used inside a method (a function that is a property of an object), it refers to the object itself.

4. Regular functions: "this" refers to the object on which the function is called.

5. Arrow functions: "this" inherits from the enclosing function or the global context.

*/

// 2. Global context
// console.log(this);
// In browser it refers to the "window" object ("global" object in node.js)

// 3. Methods
const A50 = {
    ram: 4,
    rom: 64,
    memory: function() {
        console.log(`RAM = ${this.ram}GB, Internal Storage = ${this.rom}GB`);
    }
};
// A50.memory();


// 4. Regular functions
function sayHello() {
    console.log(this);
}
// sayHello(); // "this" refers to the global object

const studentName = {
    name: "Miraj",
    greet: function() {
        console.log(this);
    }
};
// studentName.greet(); // "this" refers to the studentName object

// 5. Arrow functions
const books = {
    type: "Science & Technology",

    // regular function
    regularFunction: function() {
        console.log(this.type); // "this" refers to the books object
    },

    // arrow function
    arrowFunction: () => {
        console.log(this.type); // "this" refers to the global object
    }
};
// books.regularFunction(); // Science & Technology
// books.arrowFunction(); // undefined