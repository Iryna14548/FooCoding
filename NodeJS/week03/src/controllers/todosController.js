'use strict';

const { v4: uuidv4 } = require('uuid');
const todosModel = require('../models/todosModel');

//Get all todos
async function getTodos(req, res) {
    try {
        const todos = await todosModel.getTodos();
        res.json({ todos });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Add new Todo to list
async function addTodo(req, res) {
    try {
        const toDoData = req.body;
        if (toDoData.id) {
            return res.status(400).json({ error: 'ID is not allowed' });
        }
        if (!toDoData.task) {
            return res.status(400).json({ error: 'Task is required' });
        }
        const todo = { id: uuidv4(), ...toDoData };
        await todosModel.addTodo(todo);
        res.status(201).json({ todo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Update existing Todo
async function updateTodo(req, res) {
    try {
        const updateToDoData = req.body;
        if (!updateToDoData.id || !updateToDoData.task || typeof updateToDoData.isDone !== 'boolean') {
            return res.status(400).json({ error: 'ID, Task, and isDone are required' });
        }
        await todosModel.updateTodo(updateToDoData);
        res.json({ message: 'Todo updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Delete Todo
async function deleteTodo(req, res) {
    try {
        const success = await todosModel.deleteTodo(req.params.id);
        if (success) {
            res.json({ message: 'Todo deleted successfully' });
        } else {
            res.status(404).json({ error: 'Todo not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo,
};
