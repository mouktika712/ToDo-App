const express = require('express');
const app = express();

const port = 8000;

// use express router
app.use('/', require('./routes/index'));

// set-up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err) {
    if(err) {
        console.log(`Something went wrong on the server side!`);
        console.log(`Error: ${err}`);
        return;
    }

    console.log(`Server is running on port: ${port} without any issues!!`);
})