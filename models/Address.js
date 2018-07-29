const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let addressSchema = new Schema({
    addressId : {
        type : String,
        unique : true
    },
    houseNo : {
        type : Number,
        required : true
    },
    street : {
        type : String,
        required : true
    },
    area : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    pincode : {
        type : Number,
        minlength : 6,
        maxlength : 6
    }
})
mongoose.model('Address',addressSchema)