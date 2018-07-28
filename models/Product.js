const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const CommentSchema = mongoose.model('Comment')

let productSchema = new Schema({
    prodId : {
        type : String,
        unique : true
    },
    type : {
        type : String,
        default : ''
    },
    category : {
        type : String,
        default : ''
    },
    subCategory : {
        type : String,
        default : ''
    },
    prodName : {
        type : String,
        default : ''
    },
    prodBrand : {
        type : String,
        default : ''
    },
    isFeatured : {
        type : Boolean,
        default : false
    },
    description : {
        type : String,
        default : ''
    },
    price : {
        type : Number,
        default : 0
    },
    imgUrl : {
        type : String,
        default : 'https://domain.com/images/no-image-available.jpg'
    },
    otherImgs : [],
    availability : {
        type : Boolean,
        default : true
    },
    productCreated : {
        type : Date,
        default : Date.now
    },
    reviews : [ CommentSchema.schema ]
})

mongoose.model('Product',productSchema)