// require the schema to use find() 
const todo = require('../models/task');

module.exports.homePage = function(req, res) {

    // fetching the tasks from the database
    todo.find({}, function (err, Task) {
        if(err) {
            console.log('Error in fetching the tasks from the database!');
            return;
        }

        // render the tasks after fetching
        return res.render('homePage', {
            title: 'ToDo App',
            Tasks: Task
        });
    });

}

// module.exports.actionName = function(req, res){};