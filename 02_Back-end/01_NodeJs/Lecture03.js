/*----------------------------------------------------------------
                        Modules in Node.js
------------------------------------------------------------------*/
/*
    -> One of the key features of Node.js is its module system. 
    -> Node.js has a large number of built-in modules that we can use in our applications. 
    -> We can also create our own modules and share them with others.
    -> There are three types of modules: 
        1. File based
        2. Buid-in
        3. Third party
    -> Export: To use the module outside, we need to export it using 'module.exports' object.
    -> Import: To use a module, we need to require it using the 'require' function.
*/


/*----------------------------------------------------------
                File-based Module
------------------------------------------------------------*/

// Make an object and use this inside another file as a module
const obj = {
    average: (a, b) => (a + b) / 2,
    multiply: (a, b) => a * b
}

module.exports = obj;

// we will use this obj inside the Lecture03_helper file.


/*--------------------------------------------------------
                2. Build-in Modules
---------------------------------------------------------*/
// Import the build-in module 'fs'
// fs module is a file system module
const fs = require('fs');

// Read the text from a file (Lecture03_txtFile.txt)
/*
fs.readFile('./Lecture03_txtFile.txt', 'utf-8', (err, data) => {
    if(err) {
        throw err;
    }
    console.log(data);
}) 
*/

// Now print a simple statement
// console.log("This is a statement");

// We can see on terminal that the statement will printed first and then the text file. But why?
/* 
    -> Node.js follows an asynchronous programming model that allows for non-blocking I/O operations. 
    -> While a task is being executed, the program can continue to perform other tasks without waiting for the current task to complete.
*/

// To print the text file first we need to make the function synchronous (use 'readFileSync')
const data = fs.readFileSync('./Lecture03_txtFile.txt', 'utf-8');
console.log(data);

console.log("This is a statement");