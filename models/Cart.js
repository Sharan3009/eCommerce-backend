const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let cartSchema = new Schema({
    userId : {
        type: String,
        required : true
    },
    prodId: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 1,
        min: 1
    }
})

cartSchema.index({userId : 1, prodId: 1}, { unique : true, sparse : true })
mongoose.model('Cart', cartSchema)