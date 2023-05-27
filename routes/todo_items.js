const express = require('express')
const router = express.Router();
const {getAllToDoItems,createANewToDoItems} = require('../controllers/todo_items')
router.route('/').get(getAllToDoItems).post(createANewToDoItems)
module.exports = router