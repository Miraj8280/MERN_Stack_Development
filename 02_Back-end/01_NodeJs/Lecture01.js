/*--------------------------------------------------------------
                Introduction to Node.js
----------------------------------------------------------------*/
/*
    -> Node.js is a cross-platform JavaScript runtime environment built on the Chrome V8 JavaScript engine.
    -> It allows developers to write server-side applications using JavaScript.
    -> Developers only need to learn one language (JavaScript) to write both client-side and server-side code.
    -> Node.js is widely used in web development, and it provides a lot of modules that help developers to create web servers, APIs, and real-time applications.

    -> Installation: The first thing you need to do is to install Node.js on your computer. You can download the latest version from the official website: https://nodejs.org/en/download/

    -> Once you have downloaded and installed Node.js, you can check if it's installed correctly by running the following command in your terminal: node -v
    -> This command will display the version of Node.js that you have installed on your computer.
*/

// Print a message on in your terminal
console.log("This is lecture 01 of Node.js tutorial");

// Run the command to print the message on terminal: node <your_file_name>
// For this file: node Lecture01.js


// Add two numbers
let a, b;
function Add(a, b) {

    return a + b;
}

console.log(Add(10, 15));