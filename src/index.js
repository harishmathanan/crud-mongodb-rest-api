const express = require('express');
const logger = require('morgan');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const routes = require('./routes');

const app = express();
const port = process.env.port || 3000;
const dbUri = 'mongodb://localhost:27017/edx-course-db';

// config
app.set('Content-Type', 'application/json');

// middleware
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorHandler());

// custom middleware to ensure that all requests
// will have access to the database.
app.use((req, res, next) => {
  if (!req.db) {
    mongodb.MongoClient.connect(dbUri, (error, database) => {
      if (error) return process.exit(1);

      req.db = database;
      next();

    });
  } else {
    next();
  }
});

// routes
app.get('/', (req, res) => {
  res.status(200).send('API Server with Persistent Document Store');
});

// account endpoints
app.get('/accounts', routes.accounts.retrieveAccounts);
app.post('/accounts', routes.accounts.insertAccount);
app.put('/accounts/:id', routes.accounts.updateAccount);
app.delete('/accounts/:id', routes.accounts.removeAccount);

app.all('*', (req, res) => {
  res.status(404).send('Invalid URI endpoint');
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
