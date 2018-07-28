const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let addressSchema = new Schema({
    addressId : {
        type : String,
        unique : true
    },
    houseNo : {
        type : Number,
        default : 0
    },
    street : {
        type : String,
        unique : true
    },
    area : {
        type : String,
        default : ''
    },
    city : {
        type : String,
        default : ''
    },
    pincode : {
        type : Number,
        default : 0
    }
})
mongoose.model('Address',addressSchema)