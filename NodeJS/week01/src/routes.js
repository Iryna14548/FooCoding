'use strict';

import { defineRoute, router } from './utils/define-route.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//console.log('__filename', __filename);
//console.log('__dirname', __dirname);

const dataDirectory = path.join(__dirname, 'data');
const usersFilePath = path.join(dataDirectory, 'users.json');
const postsFilePath = path.join(dataDirectory, 'posts.json');

let users = [];
let posts = [];

async function loadDataFromFile(filePath, defaultValue) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            // File doesn't exist, return default value (usually an empty array)
            return defaultValue;
        } else {
            throw error; // Rethrow error if it's not a 'file not found' error
        }
    }
}

async function saveDataToFile(filePath, data) {
    await fs.writeFile(filePath, JSON.stringify(data, null, 4), 'utf8');
}

async function initializeData() {
    users = await loadDataFromFile(usersFilePath, []);
    posts = await loadDataFromFile(postsFilePath, []);
}

// Call initializeData at app startup
initializeData()
    .then(() => {
        console.log('Data loaded successfully.');
        console.log('users', users);
    })
    .catch((error) => {
        console.error('Failed to load data:', error);
    });

function getUniqueId(collection) {
    let id = 0;
    let index = 1;

    do {
        const item = collection.find((itemObject) => {
            return itemObject.id === index;
        });
        if (item === undefined) {
            id = index;
        } else {
            index = index + 1;
        }
    } while (id === 0);

    return id;
}

defineRoute('GET', '/users', (req, res) => {
    try {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(
            JSON.stringify({
                users: users,
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

defineRoute('GET', '/users/:id', (req, res) => {
    try {
        const userId = req.params.id;

        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        const user = users.find((user) => user.id === Number(userId));

        if (user) {
            res.end(
                JSON.stringify({
                    user: user,
                })
            );
        } else {
            res.statusCode = 404;
            res.end(
                JSON.stringify({
                    error: 'User not found',
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

defineRoute('POST', '/users', (req, res) => {
    try {
        const userData = req.body;
        if (userData.id) {
            res.statusCode = 400;
            res.end(
                JSON.stringify({
                    error: 'ID is not allowed',
                })
            );
        } else if (userData.name && userData.email) {
            const user = { id: getUniqueId(users), ...userData };
            users.push(user);

            saveDataToFile(usersFilePath, users);

            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(
                JSON.stringify({
                    user: user,
                })
            );
        } else {
            res.statusCode = 400;
            res.end(
                JSON.stringify({
                    error: 'Name and Email are required',
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

defineRoute('PATCH', '/users', (req, res) => {
    try {
        const updatedUserData = req.body;

        if (updatedUserData.id && updatedUserData.name && updatedUserData.email) {
            users = users.map((user) => {
                if (user.id === updatedUserData.id) {
                    return updatedUserData;
                }
                return user;
            });

            saveDataToFile(usersFilePath, users);

            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;

            res.end(
                JSON.stringify({
                    message: 'User updated successfully',
                })
            );
        } else {
            res.statusCode = 400;
            res.end(
                JSON.stringify({
                    error: 'ID, Name and Email are required',
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

defineRoute('DELETE', '/users/:id', (req, res) => {
    try {
        const userId = Number(req.params.id);
        const userToDelete = users.find((user) => user.id === Number(userId));

        if (userToDelete) {
            users = users.filter((user) => user.id !== userId);
            saveDataToFile(usersFilePath, users);

            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;

            res.end(
                JSON.stringify({
                    message: 'User deleted successfully',
                })
            );
        } else {
            res.statusCode = 404;
            res.end(
                JSON.stringify({
                    error: 'User not found',
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

defineRoute('GET', '/posts', (req, res) => {
    try {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(
            JSON.stringify({
                posts: posts,
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

defineRoute('GET', '/posts/:id', (req, res) => {
    try {
        const postId = Number(req.params.id);

        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        const post = posts.find((post) => post.id === postId);

        if (post) {
            res.end(
                JSON.stringify({
                    post: post,
                })
            );
        } else {
            res.statusCode = 404;
            res.end(
                JSON.stringify({
                    error: 'Post not found',
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

defineRoute('GET', '/posts-by-user/:id', (req, res) => {
    try {
        const userId = Number(req.params.id);

        const filteredPosts = posts.filter((post) => {
            return post.userId === userId;
        });

        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(
            JSON.stringify({
                posts: filteredPosts,
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

defineRoute('POST', '/posts', (req, res) => {
    try {
        const postData = req.body;
        if (postData.id) {
            res.statusCode = 400;
            res.end(
                JSON.stringify({
                    error: 'ID is not allowed',
                })
            );
        } else if (postData.userId && postData.content) {
            const post = { id: getUniqueId(posts), ...postData };

            posts.push(post);

            saveDataToFile(postsFilePath, posts);
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(
                JSON.stringify({
                    body: post,
                })
            );
        } else {
            res.statusCode = 400;
            res.end(
                JSON.stringify({
                    error: 'UserId and content are required',
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

defineRoute('PATCH', '/posts', (req, res) => {
    try {
        const updatedPostData = req.body;

        if (updatedPostData.id && updatedPostData.userId && updatedPostData.content) {
            posts = posts.map((post) => {
                if (post.id === updatedPostData.id) {
                    return updatedPostData;
                }
                return post;
            });

            saveDataToFile(postsFilePath, posts);

            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;

            res.end(
                JSON.stringify({
                    message: 'Post updated successfully',
                })
            );
        } else {
            res.statusCode = 400;
            res.end(
                JSON.stringify({
                    error: 'ID, userId and content are required',
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

defineRoute('DELETE', '/posts/:id', (req, res) => {
    try {
        const postId = Number(req.params.id);
        const postToDelete = posts.find((post) => post.id === Number(postId));

        if (postToDelete) {
            posts = posts.filter((post) => {
                if (postId !== post.id) {
                    return posts;
                }
            });
            saveDataToFile(postsFilePath, posts);

            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;

            res.end(
                JSON.stringify({
                    message: 'Post deleted successfully',
                })
            );
        } else {
            res.statusCode = 404;
            res.end(
                JSON.stringify({
                    error: 'Post not found',
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
export default router;
