// requiring the task schema
const taskSchema = require('../models/task');

module.exports.delete_task = function (req, res) {

// if no tasks are selected for deletion the user will be redirected to the mail page
    if(Object.keys(req.body).length === 0) {
        res.redirect('back');
        return;
    }

// If tasks are selected for deletion:

    //Array: getting the tasks that has been selected for deletion
    let tasksToDelete = req.body.task;

    // every task in the array is found and then deleted from the database
    for(let i = 0; i < tasksToDelete.length; i++) {
        
        taskSchema.deleteOne({description: tasksToDelete[i]}).then(function() {
            console.log(`${tasksToDelete[i]} deleted successfully!`);
        }).catch(function (error) {
            console.log(error);
        });
    }

    // redirecting to the original page
    res.redirect('back');

};
