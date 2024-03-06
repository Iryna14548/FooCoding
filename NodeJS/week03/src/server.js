'use strict';

const { initializeData } = require('./models/todosModel');
const express = require('express');
const app = express();

const port = 3000;

//setting up server and initializing routes
const todosRouter = require('./routes/todosRoutes');
app.use(express.json());
app.use('/todos', todosRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// Call initializeData at app startup
initializeData()
    .then((todos) => {
        console.log('Data loaded successfully.');
        console.log('todos', todos);
    })
    .catch((error) => {
        console.error('Failed to load data:', error);
    });
