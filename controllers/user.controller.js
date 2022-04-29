const { NOT_FOUND_MSG, BAD_REQUEST } = require("../constants.js");
const User = require("../models/User");

const create = async (req, res) => {
try{
  const { email, password } = req.body; //getting items from body
  const data = {
    email,
    password
  };
  const user = await User.create(data);
}catch(error){
  console.log(error.message);
  res.status(500).send(BAD_REQUEST);
}
}

// get user details 
const GetUserDetails = async (req, res) => {
  try {
    // console.log(Product)GetUserDetails
    const users = await User.find({});
    return res.send(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(BAD_REQUEST);
  }
};




module.exports = {
  create,
  GetUserDetails,
};
