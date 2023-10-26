-- This is the code for ChapaKazi database
-- It creates tables for users, tasks, categories, and notifications

CREATE DATABASE chapakazi;
USE chapakazi;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email_address VARCHAR(255) UNIQUE,
    password VARCHAR(255)
);

CREATE TABLE tasks (
    task_id INT AUTO_INCREMENT PRIMARY KEY,
    users_id INT,
    task_name VARCHAR(255),
    due_date DATE,
    priority ENUM('low', 'medium', 'high'),
    category VARCHAR(255),
    status ENUM('pending', 'completed'),
    FOREIGN KEY (users_id) REFERENCES users(user_id)
);

CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    users_id INT,
    category_name VARCHAR(255),
    FOREIGN KEY (users_id) REFERENCES users(user_id)
);

CREATE TABLE notifications (
    notification_id INT AUTO_INCREMENT PRIMARY KEY,
    users_id INT,
    task_id INT,
    notification_message VARCHAR(255),
    notification_datetime DATETIME,
    FOREIGN KEY (users_id) REFERENCES users(user_id),
    FOREIGN KEY (task_id) REFERENCES tasks(task_id)
);

GRANT ALL PRIVILEGES ON chapakazi* TO 'hezroneokoth'@'localhost';
