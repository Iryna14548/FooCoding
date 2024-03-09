#!/usr/bin/env node

import fetch from 'node-fetch';

// Manually parse command line arguments
const args = process.argv.slice(2); // Removes the node path and file path
const command = args[0];
const commandArgs = args.slice(1);

const apiUrl = 'http://localhost:3000/todos';

async function listTodos() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch todos');
        }
        const todos = await response.json();
        console.log(todos);
    } catch (error) {
        console.error('Error listing todos:', error.message);
    }
}

async function addTodo() {
    try {
        const task = commandArgs.join(' ');
        if (!task.trim()) {
            throw new Error('Todo task cannot be empty');
        }
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ task, isDone: false }),
        });
        if (!response.ok) {
            throw new Error('Failed to add todo');
        }
        const todo = await response.json();
        console.log('Todo added:', todo);
    } catch (error) {
        console.error('Error adding todo:', error.message);
    }
}

async function updateTodo() {
    try {
        if (commandArgs.length < 2) {
            throw new Error('Update requires an ID and a task');
        }
        const [id, ...taskParts] = commandArgs;
        const task = taskParts.join(' ');
        const response = await fetch(apiUrl, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, task, isDone: false }),
        });
        if (!response.ok) {
            throw new Error('Failed to update todo');
        }
        const todo = await response.json();
        console.log('Todo updated:', JSON.stringify(todo, null, 2));
    } catch (error) {
        console.error('Error updating todo:', error.message);
    }
}

async function deleteTodo() {
    try {
        if (commandArgs.length === 0) {
            throw new Error('Delete requires an ID');
        }
        const id = commandArgs.join('');
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete todo');
        }
        console.log('Todo deleted:', id);
    } catch (error) {
        console.error('Error deleting todo:', error.message);
    }
}

switch (command) {
    case '--list':
        await listTodos();
        break;
    case '--add':
        await addTodo();
        break;
    case '--update':
        await updateTodo();
        break;
    case '--delete':
        await deleteTodo();
        break;
    default:
        console.log('Usage:');
        console.log('--list                     List all todos');
        console.log('--add "<todo>"             Add a new todo');
        console.log('--update <id> "<todo>"     Update a todo by id');
        console.log('--delete <id>              Delete a todo by id');
        break;
}
