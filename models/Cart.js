const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let cartSchema = new Schema({
    prodId: {
        type: String,
        unique: true
    },
    quantity: {
        type: Number,
        default: 1
    }
},
    { _id: false })
// adding _id:false so that $addToSet doesnt push product if it is already in cart
mongoose.model('Cart', cartSchema)