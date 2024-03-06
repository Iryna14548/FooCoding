'use strict';

const express = require('express');

const router = express.Router();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { loadDataFromFile, saveDataToFile } = require('../utils/fileUtils.js');

const dataDirectory = path.join(__dirname, '..', 'data');
const todosFilePath = path.join(dataDirectory, 'todos.json');

let todos = [];

async function initializeData() {
    todos = await loadDataFromFile(todosFilePath, []);
}

// Call initializeData at app startup
initializeData()
    .then(() => {
        console.log('Data loaded successfully.');
        console.log('todos', todos);
    })
    .catch((error) => {
        console.error('Failed to load data:', error);
    });

//GET request
router.get('/', function (req, res, next) {
    try {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(
            JSON.stringify({
                todos: todos,
            })
        );
    } catch (error) {
        res.statusCode = 500;
        res.end(
            JSON.stringify({
                error: error.message,
            })
        );
    }
});

//POST request
router.post('/', function (req, res, next) {
    try {
        const toDoData = req.body;
        if (toDoData.id) {
            res.statusCode = 400;
            res.end(
                JSON.stringify({
                    error: 'ID is not allowed',
                })
            );
        } else if (toDoData.task) {
            const task = { id: uuidv4(), ...toDoData };
            todos.push(task);

            saveDataToFile(todosFilePath, todos);

            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 201;
            res.end(
                JSON.stringify({
                    task: task,
                })
            );
        } else {
            res.statusCode = 400;
            res.end(
                JSON.stringify({
                    error: 'Task is required',
                })
            );
        }
    } catch (error) {
        res.statusCode = 500;
        res.end(
            JSON.stringify({
                error: error.message,
            })
        );
    }
});

//PATCH request
router.patch('/', function (req, res, next) {
    try {
        const updateToDoData = req.body;

        console.log('updateToDoData', updateToDoData);
        if (updateToDoData.id && updateToDoData.task && typeof updateToDoData.isDone === 'boolean') {
            todos = todos.map((task) => {
                if (task.id === updateToDoData.id) {
                    return updateToDoData;
                }
                return task;
            });

            saveDataToFile(todosFilePath, todos);

            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;

            res.end(
                JSON.stringify({
                    message: 'Task updated successfully',
                })
            );
        } else {
            res.statusCode = 400;
            res.end(
                JSON.stringify({
                    error: 'ID, Task and isDone are required',
                })
            );
        }
    } catch (error) {
        res.statusCode = 500;
        res.end(
            JSON.stringify({
                error: error.message,
            })
        );
    }
});

//DELETE request
router.delete('/:id', function (req, res, next) {
    try {
        const toDosId = req.params.id;
        const taskToDelete = todos.find((task) => task.id === toDosId);
        console.log('toDosId', toDosId);
        console.log('taskToDelete', taskToDelete);

        if (taskToDelete) {
            todos = todos.filter((task) => task.id !== toDosId);
            saveDataToFile(todosFilePath, todos);

            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;

            res.end(
                JSON.stringify({
                    message: 'Task deleted successfully',
                })
            );
        } else {
            res.statusCode = 404;
            res.end(
                JSON.stringify({
                    error: 'Task not found',
                })
            );
        }
    } catch (error) {
        res.statusCode = 500;
        res.end(
            JSON.stringify({
                error: error.message,
            })
        );
    }
});

module.exports = router;
