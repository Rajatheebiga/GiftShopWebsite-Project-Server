const express = require('express')
const route = express.Router()
const { NOT_FOUND_MSG, BAD_REQUEST } = require("../constants");
const userController = require('../controllers/user.controller')


  route.post("/signup", userController.create);
  route.get("/login", userController.GetUserDetails);

module.exports = route











