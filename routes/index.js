/* These is a difference between module.exports and only exports.
Whenever we require express...same existing instance is passed on.
Even if we require it multiple times.
Router module in express helps us to separate router requests from their resp. controllers
 */

const express = require('express');

const router = express.Router();

// require the respective controller.js file...and call the function inside it in line 9
const homeController = require('../controllers/home_controller');

// this will call the homePage() for '/'
router.get('/', homeController.homePage);

//placing list of all the root-level requests here;
router.post('/create-task', require('./create_task'));

router.post('/delete-task', require('./delete_task'));

module.exports = router;

