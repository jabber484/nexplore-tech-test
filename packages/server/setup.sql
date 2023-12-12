-- Active: 1702274185072@@127.0.0.1@5432@duty
CREATE TABLE duty(
    id SERIAL NOT NULL,
    create_time timestamp without time zone DEFAULT '2023-12-11 14:14:14.230793'::timestamp without time zone,
    name varchar(255),
    PRIMARY KEY(id)
);