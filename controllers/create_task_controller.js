// require the schema as we need to populate the database
const Task = require("../models/task");

// Creating a task in the database
module.exports.create_task = function (req, res) {

    Task.create({
        description: req.body.description,
        deadline: req.body.deadline,
        category: req.body.category
    }, function (err, newTask) {
        if(err) {
            console.log('Error creating a new Task!');
            return;
        }

        console.log(newTask);
        // redirecting back after creating a task in the database
        return res.redirect('back');
    });
};

