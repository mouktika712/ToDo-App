// require the schema as you need to populate the database
const Task = require("../models/task");

module.exports.create_task = function (req, res) {
    // res.end('<h1 style = "color: orange"> Hey, I am a profile controller!! </h1>');

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
        return res.redirect('back');
    });
};

