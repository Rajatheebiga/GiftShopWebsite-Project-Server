const { NOT_FOUND_MSG, BAD_REQUEST } = require("../constants.js");
const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    // console.log(Product)
    const products = await Product.find({});
    return res.send(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(BAD_REQUEST);
  }
};

module.exports = {
  getProducts

};
