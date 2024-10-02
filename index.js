// import the packages to use
const express = require('express')
const db = require('./database')

// initialization
const app = express();

//define routes
app.get('/', (request, response) => {
    response.send('Hello, I am now using the Express.JS package!')
})

// define port
const port = 3300;

//launch the server
app.listen(port)