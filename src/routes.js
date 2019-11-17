const express = require("express");
const routes = express.Router();
const authMiddleware = require("./middlewares/auth");

const ProductController = require("./controllers/ProductController");
const UserController = require("./controllers/UserController");
const CartController = require("./controllers/CartController");

// routes.use(authMiddleware);

//routes Products
routes.post("/product", authMiddleware, ProductController.create);
routes.get("/product", authMiddleware, ProductController.findAll);
routes.get("/product/:id", authMiddleware, ProductController.findById);
routes.put("/product/:id", authMiddleware, ProductController.update);
routes.delete("/product/:id", authMiddleware, ProductController.delete);

//routes User
routes.post("/user", UserController.create);
routes.get("/user", authMiddleware, UserController.findAll);
routes.get("/user/:id", authMiddleware, UserController.findById);
routes.post("/user/authenticate", UserController.authenticate);

//routes Cart
routes.post("/cart", authMiddleware, CartController.create);
routes.get("/cart", authMiddleware, CartController.findAll);
routes.get("/cart/:id", authMiddleware, CartController.findById);

module.exports = routes;
