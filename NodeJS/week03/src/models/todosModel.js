'use strict';

const path = require('path');
const { loadDataFromFile, saveDataToFile } = require('../utils/fileUtils.js');

const dataDirectory = path.join(__dirname, '..', 'data');
const todosFilePath = path.join(dataDirectory, 'todos.json');

let todos = [];

async function initializeData() {
    todos = await loadDataFromFile(todosFilePath, []);
    return todos;
}

async function getTodos() {
    return todos;
}

async function addTodo(task) {
    todos.push(task);
    await saveDataToFile(todosFilePath, todos);
    return task;
}

async function updateTodo(updateToDoData) {
    todos = todos.map((task) => {
        if (task.id === updateToDoData.id) {
            return updateToDoData;
        }
        return task;
    });
    await saveDataToFile(todosFilePath, todos);
}

async function deleteTodo(id) {
    const initialTodosCount = todos.length;
    todos = todos.filter((task) => task.id !== id);
    if (todos.length !== initialTodosCount) {
        await saveDataToFile(todosFilePath, todos);
        return true;
    }
    return false;
}

module.exports = {
    initializeData,
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo,
};
