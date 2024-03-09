#!/usr/bin/env node

import inquirer from 'inquirer';

const apiUrl = 'http://localhost:3000/todos'; // Adjust this to your API's URL

const mainMenuQuestions = [
    {
        type: 'list',
        name: 'action',
        message: 'What do you want to do?',
        choices: [
            { name: 'List all Todos', value: 'list' },
            { name: 'Add a new Todo', value: 'add' },
            { name: 'Update a Todo', value: 'update' },
            { name: 'Delete a Todo', value: 'delete' },
            { name: 'Exit', value: 'exit' },
        ],
    },
];

const addTodoQuestions = [
    {
        type: 'input',
        name: 'task',
        message: 'Enter the Todo description:',
        validate: (input) => !!input.trim() || 'The description cannot be empty.',
    },
];

const updateTodoQuestions = [
    {
        type: 'input',
        name: 'id',
        message: 'Enter the Todo ID:',
        validate: (input) => !!input.trim() || 'The ID cannot be empty.',
    },
    {
        type: 'input',
        name: 'task',
        message: 'Enter the new Todo description:',
        validate: (input) => !!input.trim() || 'The description cannot be empty.',
    },
];

const deleteTodoQuestions = [
    {
        type: 'input',
        name: 'id',
        message: 'Enter the Todo ID to delete:',
        validate: (input) => !!input.trim() || 'The ID cannot be empty.',
    },
];

async function mainMenu() {
    const answers = await inquirer.prompt(mainMenuQuestions);
    switch (answers.action) {
        case 'list':
            await listTodos();
            break;
        case 'add':
            await addTodo();
            break;
        case 'update':
            await updateTodo();
            break;
        case 'delete':
            await deleteTodo();
            break;
        case 'exit':
            process.exit();
    }
    mainMenu(); // Loop back to the main menu unless the user chooses to exit
}

async function listTodos() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch todos. Status: ${response.status}`);
        }
        const todos = await response.json();
        console.log(todos);
    } catch (error) {
        console.error('Error listing todos:', error.message);
    }
}

async function addTodo() {
    const answers = await inquirer.prompt(addTodoQuestions);
    await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task: answers.task, isDone: false }),
    });
    console.log('Todo added successfully.');
}

async function updateTodo() {
    try {
        const answers = await inquirer.prompt(updateTodoQuestions);
        const response = await fetch(apiUrl, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: answers.id, task: answers.task, isDone: false }),
        });
        if (!response.ok) {
            throw new Error(`Failed to update todo. Status: ${response.status}`);
        }
        console.log('Todo updated successfully.');
    } catch (error) {
        console.error('Error updating todo:', error.message);
    }
}

async function deleteTodo() {
    try {
        const answer = await inquirer.prompt(deleteTodoQuestions);
        const response = await fetch(`${apiUrl}/${answer.id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`Failed to delete todo. Status: ${response.status}`);
        }
        console.log('Todo deleted successfully.');
    } catch (error) {
        console.error('Error deleting todo:', error.message);
    }
}

mainMenu();
