// Import express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Define a route for the server
app.get('/', (req, res) => {
    res.send("This is express.js tutorial by Miraj Asraf");
})
/* 
@ This method handles HTTP GET requests to a specific route (here, root url '/')
@ And sends a response back to the client. 
*/

// Start the server
const port = 5000;
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})
/* 
This code tells Express to listen on the specified port and logs a message to the console once the server starts.
*/