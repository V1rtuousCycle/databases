CREATE DATABASE chat;

USE chat;


CREATE TABLE users (
	user_id INT PRIMARY KEY AUTO_INCREMENT,
 	name Varchar(25) NOT NULL UNIQUE
);

CREATE TABLE messages (
  message_id int primary key AUTO_INCREMENT,
  message varchar(256),
  roomname varchar(25),
  user_id int,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

