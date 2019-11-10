const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
const UserController = require('./controllers/UserController');

//routes Products
routes.post('/product', ProductController.create);
routes.get('/product', ProductController.findAll);
routes.get('/product/:id', ProductController.findById);
routes.put('/product/:id', ProductController.update);
routes.delete('/product/:id', ProductController.delete);


//routes User
routes.post('/user', UserController.create);
routes.get('/user', UserController.findAll);

module.exports = routes;