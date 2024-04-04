CREATE DATABASE red_login_system;

CREATE TABLE accounts (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR ( 50 ) UNIQUE NOT NULL,
    password VARCHAR ( 50 ) UNIQUE NOT NULL
    
    );


