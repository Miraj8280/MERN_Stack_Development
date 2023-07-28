/* ------------------------------------------------------------------------------------
            IIFE (Immediately Invoked Function Expression)
---------------------------------------------------------------------------------------
@ It is a common JavaScript pattern used to create a self-contained scope for our code.
@ It avoid polluting the global namespace.
@ It is also known as "Self-Executing Anonymous Function".
@ Syntax:
    Simplified:   () ();
    Actual syntax:
                    ( function() {

                        // Write some code

                    }) ();

*/

// An IIFE that displays my college name
// regular function
( function() {
    // console.log("Jalpaiguri Government Engineering College");
}) ();

// arrow function
( () => {
    // console.log("JGEC using Arrow function");
}) ();


// Passing parameters to IIFE
// regular function
( function(myName) {
    // console.log(`I am ${myName}`);
})("Miraj Asraf");

// arrow function
( (myName) => {
    // console.log(`I am ${myName}`);
})("Mahir Hussain");


/* Benefits of using IIFE
@ It helps prevent variable collisions and keep our code isolated.
@ Variables declared inside IIFE are not accessible outside of it, which avoids conflicts with variables from other parts of our code. 
*/

const globalVar = "This is global variable!";

( () => {
    const localVar = "This is local variable inside IIFE!";
    
    // console.log(globalVar); // Accessible
    // console.log(localVar); // Accessible
})();

// console.log(globalVar); // Accessible
// console.log(localVar); // Not accessible
