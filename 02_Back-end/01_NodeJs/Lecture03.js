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


/*------------------------------------------------------------------------
                        Synchronous vs Asynchronous
---------------------------------------------------------------------------*/
/*
Synchronous Programming:
    -> In synchronous programming, tasks are executed in a sequential manner, one after another. -> When a task is executed, the program waits for the task to complete before moving on to the next task. 
    -> This means that the program is blocked while the task is being executed, and cannot perform any other tasks during this time.


Asynchronous Programming:
    -> In asynchronous programming, tasks are executed independently of each other, and the program does not wait for a task to complete before moving on to the next task. 
    -> When an asynchronous task is executed, the program continues to perform other tasks while the asynchronous task is being executed in the background.
*/

//===================== Synchronous Programming =====================

const task1 = () => "Result of task 1";
const task2 = () => "Result of task 2";
const task3 = () => "Result of task 3";

const result1 = task1();
const result2 = task2();
const result3 = task3();

console.log(result1);
console.log(result2);
console.log(result3);


// ====================== Asynchronous Programming =====================

function task4(callback) {
    setTimeout(() => {
      callback("Result of task 4");
    }, 1000);
  }
  
  function task5(callback) {
    setTimeout(() => {
      callback("Result of task 5");
    }, 500);
  }
  
  function task6(callback) {
    setTimeout(() => {
      callback("Result of task 6");
    }, 2000);
  }
  
  task4((result4) => {
    console.log(result4);
    task5((result5) => {
      console.log(result5);
      task6((result6) => {
        console.log(result6);
      });
    });
  });
  
// The setTimeout() function is used to simulate non-blocking operations that take a certain amount of time to complete. Each task is defined to take a different amount of time, which demonstrates how asynchronous code can execute in a non-blocking way.

// When the main program calls task1(), it passes a callback function that will be executed after task1() completes. task1() sets a timer for 1 second using setTimeout(), and then returns immediately. When the timer expires, the callback function is called with the result of task1().

// Similarly, task2() and task3() also set timers using setTimeout() and then return immediately. The order in which the tasks complete and their results are logged to the console is determined by the order in which their timers expire.