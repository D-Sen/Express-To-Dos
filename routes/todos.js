var express = require('express');
var router = express.Router();
const todosCtrl = require('../controllers/todos')

// All actual paths start with "/todos"
router.get('/', todosCtrl.index)
router.get('/new', todosCtrl.new)
router.get('/:id', todosCtrl.show)
router.post('/', todosCtrl.create)
// GET /todos/new   <-- this new route cannot not stay here!


module.exports = router;
