# todo-app-backend
Back-end for react-todo-app.

## Installation
❯ Install dependencies:

`npm i`

## Running on development
❯ Start mongoDB service (Linux)

`sudo service mongod start`

❯ Start nodemon

`npm run dev`

## Running on production
❯ Start mongoDB service (Linux)

`sudo service mongod start`

❯ Start PM2

`npm run production`

### Additional commands
❯ Stop mongoDB service (Linux)

`sudo service mongod stop`

❯ Stop pm2 on production

`./node_modules/.bin/pm2 delete todo-app`
