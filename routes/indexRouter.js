const express = require('express');
const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');

function routerApi(app){
  const mainRouter = express.Router();
  app.use('/api/v1', mainRouter);
  mainRouter.use('/products', productsRouter);
  mainRouter.use('/users', usersRouter);
}

module.exports = routerApi;
