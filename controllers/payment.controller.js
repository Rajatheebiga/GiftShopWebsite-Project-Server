const { NOT_FOUND_MSG, BAD_REQUEST } = require("../constants.js");
const Payment = require("../models/Payment");

const postPaymentAddress = async (req, res) => {
try{
  const { FirstName,LastName,email,phoneNumber,address,PinCode} = req.body; //getting items from body
  const data = {
    FirstName,
    LastName,
    email,
    phoneNumber,
    address,
    PinCode
  };
  const payment = await Payment.create(data);
}catch(error){
  console.log(error.message);
  res.status(500).send(BAD_REQUEST);
}
}
module.exports = {
    postPaymentAddress
};
