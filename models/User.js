const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const CartSchema = mongoose.model('Cart')
const AddressSchema = mongoose.model('Address')

let userSchema = new Schema({
    userId: {
        type: String,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cart: [CartSchema.schema],
    isPrime: {
        type: Boolean,
        default: false
    },
    contactNumber: {
        type: Number,
        minlength: 10,
        maxlength: 10
    },
    addresses: [AddressSchema.schema]

})

mongoose.model('User', userSchema)