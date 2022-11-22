# Todo App
> This system is responsible for creating Todos and managing them.

## Technologies
Project is created with:
* Node.js version: 16.2.0
* Mysql2

## Setup

### How to use ?

##### Clone the project
```
git clone https://github.com/YujithIsura/TodoApp.git
```
### Setup Client

##### install dependencies
```
cd TodoApp/client/
npm install
```
##### run the project
```
npm start
```
#### Server now runs at http://localhost:3000/.

### Setup Auth0 
#### Create .env file inside client folder and add following code
```
REACT_APP_AUTH0_DOMAIN=dev-ivmjubh65zbgwr5e.uk.auth0.com
REACT_APP_AUTH0_CLIENT_ID=8hl5dKQ66RnVJTXcPiYrSo6AGCVMHdnW
```

### Setup Server

##### install dependencies
```
cd TodoApp/server/
npm install
```
##### run the project
```
npm start
```
#### Server now runs at http://localhost:9001/.

### Setup DB
```
Create a Database name 'Todos'
Find the DB migration file under TodoApp/server/migrations and run 
npx sequelize-cli migration:generate --name create_todo_table
```

Use `config.json` file under TodoApp/server/config to store your important information such as your server port, your password,etc 
