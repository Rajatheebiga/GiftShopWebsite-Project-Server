const express = require("express");
const route = express.Router();
const { NOT_FOUND_MSG, BAD_REQUEST } = require("../constants");
const paymentController = require("../controllers/payment.controller");

route.post("/address",paymentController.postPaymentAddress);

module.exports = route;
