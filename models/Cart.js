const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let cartSchema = new Schema({
    prodId : {
        type : String,
        unique : true
    },
    quantity : {
        type : Number,
        default : 1
    }
})
mongoose.model('Cart',cartSchema)