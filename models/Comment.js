const mongoose = require('mongoose')
const Schema = mongoose.Schema

let CommentSchema = new Schema({
    reviewId: {
        type: String,
        unique: true
    },
    userId: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    postedTime: {
        type: Date,
        default: Date.now
    }
})

mongoose.model('Comment', CommentSchema)