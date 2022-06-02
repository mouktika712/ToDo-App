// require ODM i.e. mongoose
const mongoose = require('mongoose');

// connect your ODM nmongoose with your database mongoDB
mongoose.connect('mongodb://localhost/todo-app');

// acquire the connection
const db = mongoose.connection;

// if there is any error while connecting to the database...show this msg inside your console
db.on('error', console.error.bing(console, 'Error connecting to the Database!'));

// once the connection is open... 
db.once('open', function() {
    console.log('Connected to the Database using mongoose!');
});

// exporting this connection to be used inside app index.js
module.exports = db;