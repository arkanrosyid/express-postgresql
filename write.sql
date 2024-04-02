-- pgsql
CREATE TABLE  users (
    id SERIAL PRIMARY KEY ,
    username VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
    );  


INSERT INTO users (username, email, password) VALUES ('admin', 'admin@mail.com', '$2a$12$rHgmzc3oBdm9UgWRNvKaSO7LeDTyXvBt5hdRRIMYSMcNv9hZbradW');
INSERT INTO users (username, email, password) VALUES ('user', 'user@mail.com', '$2a$12$rHgmzc3oBdm9UgWRNvKaSO7LeDTyXvBt5hdRRIMYSMcNv9hZbradW');

ALTER TABLE users ADD COLUMN role VARCHAR(255);
UPDATE users SET role = 'admin' WHERE username = 'admin';
UPDATE users SET role = 'user' WHERE username = 'user';