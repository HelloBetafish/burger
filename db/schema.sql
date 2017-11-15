DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;
USE burgers_db;

CREATE TABLE burgers(
id int NOT NULL auto_increment,
burger_name VARCHAR(50),
devoured BOOLEAN NOT NULL DEFAULT 0,
createdAt TIMESTAMP NOT NULL,
PRIMARY KEY(id)
);
