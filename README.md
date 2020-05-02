# tasks_api
tasks api

# Technology and stack
* Node 
* Express 
* Sequelize
* Postgres

# Installation and setup
* Ensure you have postgres installed.
* create a postgres database
* clone the repo using `git clone https://github.com/andrewhingah/tasks_api.git`
* cd in to the `tasks_api` directory
* to install dependancies run `npm install`
* use `.env.example` as a guide to create a `.env` file

### Migrations
* navigate to database folder and run `npx sequelize-cli db:migrate`
* run `npx sequelize-cli db:seed:all` to add users to db

### Start server
* run `npm run start:dev` to start the server

# Endpoints
* api/login
* api/tasks

### Authors
Andrew Hinga
