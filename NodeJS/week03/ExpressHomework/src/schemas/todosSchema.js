const Joi = require('joi');

// Base schema without id
const baseTodoSchema = Joi.object({
    task: Joi.string().trim().min(1).required(),
    isDone: Joi.boolean().required(),
});

// Schema for POST requests - no ID needed as it's generated on the server
const todoPostSchema = baseTodoSchema.append({});

// Schema for PATCH requests - ID is required
const todoPatchSchema = baseTodoSchema.append({
    id: Joi.string().guid({ version: 'uuidv4' }),
});

// Middleware for POST validation
const validatePostTodo = (req, res, next) => {
    const { error } = todoPostSchema.validate(req.body);
    if (error) {
        return res.status(400).json(error);
    }
    next();
};

// Middleware for PATCH validation
const validatePatchTodo = (req, res, next) => {
    const { error } = todoPatchSchema.validate({ id: req.params.id, ...req.body });
    if (error) {
        return res.status(400).json(error);
    }
    next();
};

module.exports = { validatePostTodo, validatePatchTodo };
