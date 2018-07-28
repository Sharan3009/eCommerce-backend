const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const CartSchema = mongoose.model('Cart')
const AddressSchema = mongoose.model('Address')

let userSchema = new Schema({
    userId : {
        type : String,
        unique : true
    },
    firstName : {
        type : String,
        default : ''
    },
    lastName : {
        type : String,
        default : ''
    },
    emailId : {
        type : String,
        default : ''
    },
    password : {
        type : String,
        default : ''
    },
    cart : [ CartSchema.schema ],
    isPrime : {
        type : Boolean,
        default : false
    },
    contactNumber : {
        type : Number,
        default : 0
    },
    addresses : [ AddressSchema.schema ]

})

mongoose.model('User',userSchema)