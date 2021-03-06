DROP DATABASE IF EXISTS burgers_db;

--    * Create the `burgers_db`.
CREATE DATABASE burgers_db;

--    * Switch to or use the `burgers_db`.
USE burgers_db;

CREATE TABLE burgers (
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
burger_name VARCHAR(30) NOT NULL,
devoured BOOLEAN
);