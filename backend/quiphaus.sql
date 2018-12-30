-- Database: quiphaus

-- DROP DATABASE quiphaus;

-- CREATE DATABASE quiphaus
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;
	
CREATE EXTENSION pgcrypto;
	
CREATE TABLE users (
	id			serial PRIMARY KEY,
	username	TEXT UNIQUE NOT NULL,
	password	TEXT NOT NULL
);

CREATE TABLE quotes (
	quote_id		serial NOT NULL,
	user_id			INTEGER REFERENCES users(id) NOT NULL,
	body			text NOT NULL,
	attribution		text,
	PRIMARY KEY (quote_id, user_id)
);