'use strict';

const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todosController');
const validateTodo = require('../schemas/todosSchema');

//Routes for Todos with validation middleware
router.get('/', todosController.getTodos);
router.post('/', validateTodo.validatePostTodo, todosController.addTodo); // Apply middleware to POST
router.patch('/', validateTodo.validatePatchTodo, todosController.updateTodo); // Apply middleware to PATCH
router.delete('/:id', todosController.deleteTodo);

module.exports = router;
