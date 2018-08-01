//middleware to add and validate comment model
const express = require('express')
const mongoose = require('mongoose')
const CommentModel = mongoose.model('Comment')
const shortid = require('shortid')
const response = require('../libs/responseLib')
const time = require('../libs/timeLib')
const check = require('../libs/checkLib')
const logger = require('../libs/loggerLib')

let addToReviewDB = (req, res, next) => {
	req.postedTime = time.now()
	req.reviewId = shortid.generate()
	let newComment = new CommentModel({
		reviewId: req.reviewId,
		userId: req.params.userId,
		comment: req.body.comment,
		rating: req.body.rating,
		postedTime: req.postedTime
	})
	newComment.save((err, result) => {
		if (err) {
			logger.error(err.message, 'Review Middleware: addToReviewDB', 10)
			let apiResponse = response.generate(true, 'Error occured while adding the review', 500, null)
			res.send(apiResponse)
		} else {
			logger.info('Comment successfully added', 'Review Middleware: addToReviewDB', 5)
			next()
		}
	})
}

let removeFromReviewDB = (req, res, next) => {
	CommentModel.findOneAndRemove({'reviewId' : req.params.reviewId },(err, result) => {
		if (err) {
			logger.error(err.message, 'Review Middleware: removeFromReviewDB', 10)
			let apiResponse = response.generate(true, 'Error occured while deleting the review', 500, null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)) {
			logger.info('No Review Found', 'Review Middleware: removeFromReviewDB', 5)
			let apiResponse = response.generate(true, 'No Review Found', 404, null)
			res.send(apiResponse)
		} else {
			logger.info('Review Deleted', 'Review Middleware: removeFromReviewDB', 5)
			next()
		}
	})
}

let updateCommentDB = (req,res,next)=> {
	CommentModel.findOneAndUpdate({ 'reviewId': req.params.reviewId }, { 'comment': req.body.comment, 'postedTime': time.now() }, { new: true }, { multi: true }, (err, result) => {
		if (err) {
			logger.error(err.message, 'Review Middleware: updateCommentDB', 10)
			let apiResponse = response.generate(true, 'Error occured while editing the comment', 500, null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)) {
			logger.info('No Review Found', 'Review Middleware: updateCommentDB', 5)
			let apiResponse = response.generate(true, 'No Review Found', 404, null)
			res.send(apiResponse)
		} else {
			logger.info('Review successfully Edited', 'Review Middleware: updateCommentDB', 5)
			next()
		}
	})
}

module.exports = {
    addToReviewDB: addToReviewDB,
	removeFromReviewDB : removeFromReviewDB,
	updateCommentDB : updateCommentDB
}