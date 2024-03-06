'use strict';

const { v4: uuidv4 } = require('uuid');
const todosModel = require('../models/todosModel');

async function getTodos(req, res) {
    try {
        const todos = await todosModel.getTodos();
        res.json({ todos });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function addTodo(req, res) {
    try {
        const toDoData = req.body;
        if (toDoData.id) {
            return res.status(400).json({ error: 'ID is not allowed' });
        }
        if (!toDoData.task) {
            return res.status(400).json({ error: 'Task is required' });
        }
        const task = { id: uuidv4(), ...toDoData };
        await todosModel.addTodo(task);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateTodo(req, res) {
    try {
        const updateToDoData = req.body;
        if (!updateToDoData.id || !updateToDoData.task || typeof updateToDoData.isDone !== 'boolean') {
            return res.status(400).json({ error: 'ID, Task, and isDone are required' });
        }
        await todosModel.updateTodo(updateToDoData);
        res.json({ message: 'Task updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteTodo(req, res) {
    try {
        const success = await todosModel.deleteTodo(req.params.id);
        if (success) {
            res.json({ message: 'Task deleted successfully' });
        } else {
            res.status(404).json({ error: 'Task not found' });
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
