/*------------------------------------------------------------------------
                    Introduction to JavaScript
--------------------------------------------------------------------------*/
/*
1. What is JavaScript?
    => JavaScript is a cross-platform, interpreted, object-oriented scripting language.
    => It can be used for both client-side and server-side programming.
    => Pages made with HTML and CSS are static but using javascript makes them dynamic allowing them to respond and interact with the user.

2. History of JavaScript:
    => JavaScript was created by Brendan Eich in September 1995. 
    => It was initially called Mocha, then LiveScript, and finally Javascript.
*/

/*-------------------------------------------------------------------------
                    Write Code in JavaScript
----------------------------------------------------------------------------*/
/*
    => We can write JavaScript code on browser's console.
    => Open google chrome and press ctrl+shift+J to open console.
    => A simple JavaScript program to print your name: console.log("Miraj Asraf");
    => Print sum of two numbers: console.log("5 + 10 = ", 5 + 10);
    => JavaScript can be included in HTML file in two ways: i) Internal JS and ii) External JS
        i) Internal JS:
            * Internal JS means the JavaScript code is written in the HTML file itself.
            * It is done by writing the JS code inside <script> tag and placing this in either the <head> or <body> tag as per the requirement.
            * Syntax: 
                    <script>
                        //JS code
                    </script>
        
        ii) External JS:
            * In external JS, the javascript code is written in another file with the .js extension.
            * A link to this JS file is added in the HTML file at the end of the body.
            * We can do so by using the <script> tag and adding one attribute src, the src attribute has the path to the JS file.
            * This is the preferred way as it promotes code readability and reusability.
            * Syntax:
                    <script type="text/javascript" src="Lecture00.js"></script>  
*/
console.log("This is External JS");

/*----------------------------------------------------------------------
                        document.write() method
------------------------------------------------------------------------*/
    /*
        => This is another way to print message
        => Unlike console.log(), it prints the message on the HTML document instead of the console.
    */
    // document.write("This is written using document.write() method");

/*----------------------------------------------------------------------
                        alert() method
------------------------------------------------------------------------*/
    // This function displays a pop-up box over the current window with the specified message.
    // alert("This message is using alert() method");



/*----------------------------------------------------------------------
                        promt() method
------------------------------------------------------------------------*/
    // This function displays a pop-up box over the current window that allows the user to enter input.
    // prompt("Enter your name");



/*----------------------------------------------------------------------
                    async and defer
------------------------------------------------------------------------*/
    /*
        => async and defer are <script> tag attributes that can be used to increase website loading times.

        => With async, the file gets downloaded asynchronously and then executed as soon as it’s downloaded. 
            <script async src="Lecture01.js"></script>

        => With defer, the file gets downloaded asynchronously but executed only when the document parsing is completed.
            <script defer src="Lecture01.js"></script>

        => Asynchronous loading: Loading a script simultaneously with the web page is called asynchronous loading.

        => In terms of page rendering, defer is better than async. 
        => async may cause a delay in page rendering.

    */

