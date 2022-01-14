CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    first_name varchar NOT NULL,
    last_name varchar NOT NULL,
    email varchar NOT NULL UNIQUE,
    password varchar NOT NULL,
    phone varchar NOT NULL
);
