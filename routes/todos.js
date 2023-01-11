var express = require('express');
var router = express.Router();
const todosCtrl = require('../controllers/todos')

// All actual paths start with "/todos"
router.get('/', todosCtrl.index)
router.get('/:id', todosCtrl.show)


module.exports = router;
