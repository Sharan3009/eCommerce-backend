//middleware to add and validate cart model
const express = require('express')
const mongoose = require('mongoose')
const CartModel = mongoose.model('Cart')
const response = require('../libs/responseLib')
const check = require('../libs/checkLib')
const logger = require('../libs/loggerLib')

let addToCartDB = (req, res, next) => {
	let newCart = new CartModel({
        userId : req.params.userId,
		prodId: req.params.prodId
	})
	newCart.save((err, result) => {
		if (err) {
			logger.error(err.message, 'Cart Middleware: addToCartDB', 10)
			let apiResponse = response.generate(true, 'Error occured while adding to cart', 500, null)
			res.send(apiResponse)
		} else {
			logger.info('Product successfully Created', 'Cart Middleware: addToCartDB', 5)
			next()
		}
	})
}

let removeFromCartDB = (req, res, next) => {
	CartModel.findOneAndRemove({'userId' : req.params.userId , 'prodId' : req.params.prodId },(err, result) => {
		if (err) {
			logger.error(err.message, 'Cart Middleware: removeFromCartDB', 10)
			let apiResponse = response.generate(true, 'Error occured while removing from cart', 500, null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)) {
			logger.info('No Product Found', 'Cart Middleware: removeFromCartDB', 5)
			let apiResponse = response.generate(true, 'No Product Found', 404, null)
			res.send(apiResponse)
		} else {
			logger.info('Product successfully Deleted', 'Cart Middleware: removeFromCartDB', 5)
			next()
		}
	})
}

let increaseQtyCartDB = (req, res, next) => {
	CartModel.findOne({'userId' : req.params.userId , 'prodId' : req.params.prodId },(err, result) => {
		if (err) {
			logger.error(err.message, 'Cart Middleware: increaseQtyCartDB', 10)
			let apiResponse = response.generate(true, 'Error occured while increasing quantity', 500, null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)) {
			logger.info('No Product Found', 'Cart Middleware: increaseQtyCartDB', 5)
			let apiResponse = response.generate(true, 'No Product Found', 404, null)
			res.send(apiResponse)
		} else {
			result.quantity +=1;
			result.save((err,result) =>{
				if (err) {
					logger.error(err.message, 'Cart Middleware: increaseQtyCartDB', 10)
					let apiResponse = response.generate(true, 'Error occured while increasing quantity', 500, null)
					res.send(apiResponse)
				} else if (check.isEmpty(result)) {
					logger.info('No Product Found', 'Cart Middleware: increaseQtyCartDB', 5)
					let apiResponse = response.generate(true, 'No Product Found', 404, null)
					res.send(apiResponse)
				} else {
					logger.info('Quantity successfully increased', 'Cart Middleware: increaseQtyCartDB', 5)
					next()
				}
			})
		}
	})
}

let decreaseQtyCartDB = (req, res, next) => {
	CartModel.findOne({'userId' : req.params.userId , 'prodId' : req.params.prodId },(err, result) => {
		if (err) {
			logger.error(err.message, 'Cart Middleware: decreaseQtyCartDB', 10)
			let apiResponse = response.generate(true, 'Error occured while decreasing quantity', 500, null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)) {
			logger.info('No Product Found', 'Cart Middleware: decreaseQtyCartDB', 5)
			let apiResponse = response.generate(true, 'No Product Found', 404, null)
			res.send(apiResponse)
		} else {
			result.quantity -=1;
			result.save((err,result) =>{
				if (err) {
					logger.error(err.message, 'Cart Middleware: decreaseQtyCartDB', 10)
					let apiResponse = response.generate(true, 'Error occured while decreasing quantity', 500, null)
					res.send(apiResponse)
				} else if (check.isEmpty(result)) {
					logger.info('Quantity cannot be 0', 'Cart Middleware: decreaseQtyCartDB', 5)
					let apiResponse = response.generate(true, 'Quantity cannot be 0', 404, null)
					res.send(apiResponse)
				} else {
					logger.info('Quantity successfully decreased', 'Cart Middleware: decreaseQtyCartDB', 5)
					next()
				}
			})
		}
	})
}

module.exports = {
    addToCartDB: addToCartDB,
	removeFromCartDB : removeFromCartDB,
	increaseQtyCartDB : increaseQtyCartDB,
	decreaseQtyCartDB : decreaseQtyCartDB
}