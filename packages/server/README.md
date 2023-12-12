# Server

This is the API server for the project. It is a NodeJS Express server, and connects to a PostgreSQL database.

## Prerequisite

- NodeJS (developed on v16.14.2)
- PostgreSQL (developed on 16.1)

## Setup

### 1) Create table on DB
- Using the DB tools of your choice, run the `setup.sql` to setup the table `duty` in the database

### 2) Create .env 
- Copy `.env.sample` into `.env` and fill in the information
- Variable prefixed with PG are those related to DB connection, please setup according to your local setting

### 3) Install the packages
- change directory to the package root
- Run `npm i` to install the package

### 4) Run the Server
- Run `npm start` to start the server
- or, `npm run start:prod` to run in PRODUCTION mode

## Usage
- A postman collection is available `postman_collection.json`

## Test 
- Run `npm test` to test the CRUD operation on the service layer
