# Client

This is the client for the project. It is a react client initailized by Vite, and ant design with tailwind CSS as CSS tools.

## Prerequisite

- NodeJS (developed on v16.14.2)

## Setup

### 1) Create .env 
- Copy `.env.sample` into `.env.local` and fill in the information
- It will override the API server host at local

### 3) Install the packages
- change directory to the package root
- Run `npm i` to install the package

### 4) Run the Server
- Run `npm run dev` to start the server
- Access the link on terminal

## Build
- Run `npm run build` to build a static site
- see `./dist` for the output

## Test 
- Run `npm test` to run a unit test on the component `DutyItem`
