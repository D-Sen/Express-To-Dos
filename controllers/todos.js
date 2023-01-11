const Todo = require('../models/todo')

module.exports = {
    index,
    show
}

function index(req, res) {
    res.render('todos/index', {
        todos: Todo.getAll(),
        title: 'All To-Dos'
    });
}

function show(req, res) {
    console.log(req.params)
    res.render('todos/show', {
        todo: Todo.getOne(req.params.id),
        title: 'To-Do Details'
    })
}

