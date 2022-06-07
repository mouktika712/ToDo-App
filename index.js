// Setting up exress
const express = require('express');
const app = express();
// port
const port = 8000;
const db = require('./config/mongoose');
const TaskSchema = require('./models/task');



// Adding assets folder
app.use(express.static('./assets'));

// body-parser
app.use(express.urlencoded());

// use express router
app.use('/', require('./routes/index'));

// set-up the view engine: ejs
app.set('view engine', 'ejs');
app.set('views', './views');

// server
app.listen(port, function(err) {
    if(err) {
        console.log(`Something went wrong on the server side!`);
        console.log(`Error: ${err}`);
        return;
    }

    console.log(`Server is running on port: ${port} without any issues!!`);
})