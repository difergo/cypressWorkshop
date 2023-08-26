CREATE DATABASE IF NOT EXISTS people;
USE people;
CREATE TABLE IF NOT EXISTS people (id int, name varchar(255));
INSERT INTO people(id,name) VALUES(1, "Pepe");
INSERT INTO people(id,name) VALUES(2, "Juan");