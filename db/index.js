const mongoose = require("mongoose");

const url='mongodb://localhost:27017/Gift-Shop'

module.exports=mongoose
.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
.catch(e=>console.log(e))

