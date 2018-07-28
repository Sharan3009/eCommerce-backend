const mongoose = require('mongoose')
const Schema = mongoose.Schema

let CommentSchema = new Schema({
        reviewId : {
            type : String,
            unique : true
        },
        name : {
            type: String,
            default : ''
        },
        comment : {
            type : String,
            default : ''
        },
        rating : {
            type : Number,
            default : 0
        },
        postedTime : {
            type : Date,
            default : Date.now
        }
})

mongoose.model('Comment',CommentSchema)