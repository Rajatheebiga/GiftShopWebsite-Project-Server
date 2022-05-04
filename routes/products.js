const express = require('express')
const route = express.Router()
const { NOT_FOUND_MSG, BAD_REQUEST } = require("../constants");
const productController = require('../controllers/product.controller')

// route.get("/", productController.getAll);
  route.get("/", productController.getProducts);

  // if nothing matches it will display here
  route.get("*", (req, res) => {
    res.status(404).send(NOT_FOUND_MSG);
  });
 


module.exports = route










