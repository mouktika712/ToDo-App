const express = require('express');

const router = express.Router();

// require the corresponding controller.js file
const usersController = require('../controllers/users_controller');

// using the action function for specifies route..which is present inside the required controller module
router.get('/profile', usersController.profile);

// This router is valid for this file only...so we are exporting it...and using it by router.use() in index.js file
module.exports = router;
