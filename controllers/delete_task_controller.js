const taskSchema = require('../models/task');

module.exports.delete_task = function (req, res) {
    
    const tasksToDelete = req.body.task;

    for(let i = 0; i < tasksToDelete.length; i++) {
        
        taskSchema.deleteOne({description: tasksToDelete[i]}).then(function() {
            console.log(`${tasksToDelete[i]} deleted successfully!`);
        }).catch(function (error) {
            console.log(error);
        });
    }
        
    console.log(req.body.task);

    res.redirect('back');

};
