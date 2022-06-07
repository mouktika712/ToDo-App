// requiring mongoose to create a schema
const mongoose = require('mongoose');

// creating a schema
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

// Adding the schema to mongoose for Task
const Task = mongoose.model('Task', taskSchema);

// exporting
module.exports = Task;