
const mongoose = require("mongoose");

const schemaDefinition ={
    email:{
        type: String,
        required:true
        
    },
    password:{
        type: String,
        required:true
    }
//     image:{
//         type: ImageObject,
//         required:true,
//         url :
//     },
}
// schema
const userSchema = new mongoose.Schema(schemaDefinition)

//modal
const User = new mongoose.model('User',userSchema)
module.exports= User;


