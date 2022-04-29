const mongoose = require("mongoose");

const schemaDefinition ={
    detail:{
        type: String,
        required:true
        
    },
    price:{
        type: Number,
        required:true
    },
    category:{
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
const productSchema = new mongoose.Schema(schemaDefinition)

//modal
const Product = new mongoose.model('Product',productSchema)
module.exports= Product;

