// require the schema to use find() 
const todo = require('../models/task');

module.exports.homePage = function(req, res) {

    todo.find({}, function (err, Task) {
        if(err) {
            console.log('Error in fetching the tasks from the database!');
            return;
        }

        return res.render('homePage', {
            title: 'ToDo App',
            Tasks: Task
        });
    });

    
    // res.end('<h1 style = "color: green">Hey, I am a homePage controller</h1> ');
}

// module.exports.actionName = function(req, res){};