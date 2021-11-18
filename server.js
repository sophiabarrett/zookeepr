const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')
const express = require('express');
const fs = require('fs');
const path = require('path');
const { animals } = require('./data/animals.json');
const PORT = process.env.PORT || 3001;

// instantiate server
const app = express();

// parse incoming string or array data into req.body JS object
    // built-in Express.js method that informs server that there may be sub-array data nested,
    // so it needs to look as deep into the POST data as possible to parse all of the data correctly
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data into req.body JS object
app.use(express.json());

// tell server where to find front-end files
app.use(express.static('public'));

// setup routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// tell server to listen for requests
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});