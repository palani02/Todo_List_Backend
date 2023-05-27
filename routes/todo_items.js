const express = require('express')
const router = express.Router();

const {getAllToDoItems,createANewToDoItems,getAToDoItem,updateAToDoItem,deleteAToDoItem} = require('../controllers/todo_items')
router.route('/').get(getAllToDoItems).post(createANewToDoItems)
router.route('/:id').get(getAllToDoItems)
router.route('/id:').get(getAllToDoItems).update(updateAToDoItem)
router.route('/id:').patch(updateAToDoItem).delete(deleteAToDoItem)
module.exports = router