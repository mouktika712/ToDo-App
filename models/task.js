const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },

    deadline: {
        type: String 
    },
    
    category: {
        type: String
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;