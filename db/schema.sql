-- DROP DATABASE IF EXISTS burgers_db;
-- DROP TABLE IF EXISTS burgers;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN
);
-- INSERT INTO burgers (burger_name, devoured)
-- VALUES ("La Bestia", 0);
-- SELECT * FROM burgers;