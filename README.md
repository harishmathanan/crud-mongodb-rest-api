# Express API with MongoDB store
API Web server that supports full CRUD operations and persistent document store. Built with Express framework and MongoDB.

## Dependencies
* body-parser
* errorhandler
* express
* mongodb
* morgan
* node-dev

## Instructions
1. Ensure machine has Nodejs and MongoDB installed.
2. Ensure that the local instance of the MongoDB server is running.
3. Download repository to folder or `git clone`.
4. Within the folder run `npm run dev` from command to install all dependencies.
5. Once complete run `npm run dev` to start up the API server.
6. Navigate to `http://localhost:3000` to view the available endpoints.

## Usage
```
GET /accounts
returns a collection of accounts.
```

```
POST /accounts
adds a new account.
```

```
PUT /accounts/:id
updates an account.
```

```
DELETE /accounts/:id
removes an account.
```
