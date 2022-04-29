
const mongoose = require("mongoose");

const schemaDefinition ={
    FirstName:{
        type: String,
        required:true
        
    },
    LastName:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
        
    },
    phoneNumber:{
        type: Number,
        required:true
        
    },
    address:{
        type: String,
        required:true
        
    },
    PinCode:{
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
const PaymentSchema = new mongoose.Schema(schemaDefinition)

//modal
const Payment = new mongoose.model('Payment',PaymentSchema)
module.exports= Payment;


