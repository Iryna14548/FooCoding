CREATE DATABASE ToDo;
USE ToDo;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE todo_lists (
    list_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, list_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE todo_items (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    list_id INT NOT NULL,
    description TEXT NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    reminder_time TIMESTAMP,
    FOREIGN KEY (list_id) REFERENCES todo_lists(list_id)
);

CREATE TABLE tags (
    tag_id INT AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(50) NOT NULL
);

CREATE TABLE item_tags (
    item_id INT NOT NULL,
    tag_id INT NOT NULL,
    PRIMARY KEY (item_id, tag_id),
    FOREIGN KEY (item_id) REFERENCES todo_items(item_id),
    FOREIGN KEY (tag_id) REFERENCES tags(tag_id)
);
