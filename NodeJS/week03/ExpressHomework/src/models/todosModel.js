'use strict';

const path = require('path');
const { loadDataFromFile, saveDataToFile } = require('../utils/fileUtils.js');

const dataDirectory = path.join(__dirname, '..', 'data');
const todosFilePath = path.join(dataDirectory, 'todos.json');

let todos = [];

//Initialize Todo data from JSON file
async function initializeData() {
    todos = await loadDataFromFile(todosFilePath, []);
    return todos;
}

//Getting all Todos
async function getTodos() {
    return todos;
}

// Getting Todo by ID
async function getTodosById(id) {
    return todos.find((todo) => todo.id === id);
}

//Adding a new Todo
async function addTodo(todo) {
    todos.push(todo);
    await saveDataToFile(todosFilePath, todos);
    return todo;
}

//Updating existing Todo
async function updateTodo(updateToDoData) {
    todos = todos.map((todo) => {
        if (todo.id === updateToDoData.id) {
            return updateToDoData;
        }
        return todo;
    });
    await saveDataToFile(todosFilePath, todos);
}

//Deleting Todo
async function deleteTodo(id) {
    const initialTodosCount = todos.length;
    todos = todos.filter((todo) => todo.id !== id);
    if (todos.length !== initialTodosCount) {
        await saveDataToFile(todosFilePath, todos);
        return true;
    }
    return false;
}

module.exports = {
    initializeData,
    getTodos,
    getTodosById,
    addTodo,
    updateTodo,
    deleteTodo,
};
