const express = require('express')
const mongoose = require('mongoose')
const UserModel = mongoose.model('User')
const CartModel = mongoose.model('Cart')
const AddressModel = mongoose.model('Address')
const shortid = require('shortid')
const response = require('../libs/responseLib')
const check = require('../libs/checkLib')
const logger = require('../libs/loggerLib')

// function add the product into the cart of existing user
let addToCart = (req, res) => {
	let newCart = new CartModel({
		prodId: req.params.prodId
	})
	UserModel.findOneAndUpdate({ 'userId': req.params.userId }, { $addToSet: { cart: newCart } }, { new: true }, (err, result) => {
		if (err) {
			logger.error(err.message, 'User Controller: addToCart', 10)
			let apiResponse = response.generate(true, 'Error occured while adding to cart', 500, null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)) {
			logger.info('No User Found', 'User Controller: addToCart', 5)
			let apiResponse = response.generate(true, 'No User Found', 404, null)
			res.send(apiResponse)
		} else {
			logger.info('User Found', 'User Controller: addToCart', 5)
			let apiResponse = response.generate(false, 'Product successfully added to cart', 200, result)
			res.send(apiResponse)
		}
	})
}

// function to increase quantity of the existing product added in the cart
let increaseQty = (req, res) => {
	UserModel.findOneAndUpdate({ 'userId': req.params.userId, 'cart.prodId': req.params.prodId }, { $inc: { 'cart.$.quantity': 1 } }, { new: true }, (err, result) => {
		if (err) {
			logger.error(err.message, 'User Controller: increaseQty', 10)
			let apiResponse = response.generate(true, 'Error occured while increasing quantity', 500, null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)) {
			logger.info('No User Found', 'User Controller: increaseQty', 5)
			let apiResponse = response.generate(true, 'No User Found', 404, null)
			res.send(apiResponse)
		} else {
			logger.info('User Found', 'User Controller: increaseQty', 5)
			let apiResponse = response.generate(false, 'Quantity successfully increased', 200, result)
			res.send(apiResponse)
		}
	})
}
//function to decrease quantity of the existing producct added in the cart
let decreaseQty = (req, res) => {
	UserModel.findOneAndUpdate({ 'userId': req.params.userId, 'cart.prodId': req.params.prodId }, { $inc: { 'cart.$.quantity': -1 } }, { new: true }, (err, result) => {
		if (err) {
			logger.error(err.message, 'User Controller: decreaseQty', 10)
			let apiResponse = response.generate(true, 'Error occured while decreasing the quantity', 500, null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)) {
			logger.info('No User Found', 'User Controller: decreaseQty', 5)
			let apiResponse = response.generate(true, 'No User Found', 404, null)
			res.send(apiResponse)
		} else {
			logger.info('User Found', 'User Controller: decreaseQty', 5)
			let apiResponse = response.generate(false, 'Quantity successfully decreased', 200, result)
			res.send(apiResponse)
		}
	})
}

// function to remove existing product from the cart
let removeFromCart = (req, res) => {
	UserModel.update({ 'userId': req.params.userId }, { $pull: { 'cart': { 'prodId': req.params.prodId } } }, (err, result) => {
		if (err) {
			logger.error(err.message, 'User Controller: removeFromCart', 10)
			let apiResponse = response.generate(true, 'Error occured while removing from cart', 500, null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)) {
			logger.info('No Cart Found', 'User Controller: removeFromCart', 5)
			let apiResponse = response.generate(true, 'No User Found', 404, null)
			res.send(apiResponse)
		} else {
			logger.info('Cart Found', 'User Controller: removeFromCart', 5)
			let apiResponse = response.generate(false, 'Product successfully removed from cart', 200, result)
			res.send(apiResponse)
		}
	})
}

// function to create user credentials
let createUser = (req, res) => {
	let userId = shortid.generate();
	let newUser = new UserModel({
		userId: userId,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		emailId: req.body.emailId,
		password: req.body.password,
		contactNumber: req.body.contactNumber
	})
	newUser.save((err, result) => {
		if (err) {
			logger.error(err.message, 'User Controller: createUser', 10)
			let apiResponse = response.generate(true, 'Error occured saving the user', 500, null)
			res.send(apiResponse)
		} else {
			logger.info('User successfully Created', 'User Controller: createUser', 5)
			let apiResponse = response.generate(false, 'User successfully created', 200, result)
			res.send(apiResponse)
		}
	})
}

// function to fetch all the users
let getAllUsers = (req, res) => {
	UserModel.find()
		.select('-_id -__v')
		.lean()
		.exec((err, result) => {
			if (err) {
				logger.error(err.message, 'User Controller: getAllUsers', 10)
				let apiResponse = response.generate(true, 'Error occured while getting all the users', 500, null)
				res.send(apiResponse)
			} else if (check.isEmpty(result)) {
				logger.info('No Users Found', 'User Controller: getAllUsers', 5)
				let apiResponse = response.generate(true, 'No Users Found', 404, null)
				res.send(apiResponse)
			} else {
				logger.info('Users Found', 'User Controller: getAllUsers', 5)
				let apiResponse = response.generate(false, 'Users Found', 200, result)
				res.send(apiResponse)
			}
		})
}

// function to get single users using userId
let getSingleUser = (req, res) => {
	UserModel.findOne({ userId: req.params.userId })
		.select('-_id -__v')
		.lean()
		.exec((err, result) => {
			if (err) {
				logger.error(err.message, 'User Controller: getSingleUser', 10)
				let apiResponse = response.generate(true, 'Error occured while getting the user', 500, null)
				res.send(apiResponse)
			} else if (check.isEmpty(result)) {
				logger.info('No User Found', 'User Controller: getSingleUser', 5)
				let apiResponse = response.generate(true, 'No Users Found', 404, null)
				res.send(apiResponse)
			} else {
				logger.info('User Found', 'User Controller: getSingleUser', 5)
				let apiResponse = response.generate(false, 'User Found', 200, result)
				res.send(apiResponse)
			}
		})
}

// function to update credentials of the users
let updateCredentials = (req, res) => {
	let options = req.body;
	UserModel.update({ 'userId': req.params.userId }, options, { multi: true }, (err, result) => {
		if (err) {
			logger.error(err.message, 'User Controller: updateCredentials', 10)
			let apiResponse = response.generate(true, 'Error occured while updating the Credentials', 500, null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)) {
			logger.info('No User Found', 'User Controller: updateCredentials', 5)
			let apiResponse = response.generate(true, 'No User Found', 404, null)
			res.send(apiResponse)
		} else {
			logger.info('User successfully Edited', 'User Controller: updateCredentials', 5)
			let apiResponse = response.generate(false, 'User successfully updated', 200, result)
			res.send(apiResponse)
		}
	})
}

// function to delete the existing user
let deleteUser = (req, res) => {
	UserModel.remove({ 'userId': req.params.userId }, (err, result) => {
		if (err) {
			logger.error(err.message, 'User Controller: deleteUser', 10)
			let apiResponse = response.generate(true, 'Error occured while deleting the User', 500, null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)) {
			logger.info('No User Found', 'User Controller: deleteUser', 5)
			let apiResponse = response.generate(true, 'No User Found', 404, null)
			res.send(apiResponse)
		} else {
			logger.info('User successfully Deleted', 'User Controller: deleteUser', 5)
			let apiResponse = response.generate(false, 'User successfully deleted', 200, result)
			res.send(apiResponse)
		}
	})
}

// function to add the address in the existing users
let addAddress = (req, res) => {
	let addressId = shortid.generate()
	let newAddress = new AddressModel({
		addressId: addressId,
		houseNo: req.body.houseNo,
		street: req.body.street,
		area: req.body.area,
		city: req.body.city,
		pincode: req.body.pincode
	})
	UserModel.findOneAndUpdate({ 'userId': req.params.userId }, { $push: { addresses: newAddress } }, { new: true }, (err, result) => {
		if (err) {
			logger.error(err.message, 'User Controller: addAddress', 10)
			let apiResponse = response.generate(true, 'Error occured while adding address', 500, null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)) {
			logger.info('No User Found', 'User Controller: addAddress', 5)
			let apiResponse = response.generate(true, 'No User Found', 404, null)
			res.send(apiResponse)
		} else {
			logger.info('User Found', 'User Controller: addAddress', 5)
			let apiResponse = response.generate(false, 'address successfully added', 200, result)
			res.send(apiResponse)
		}
	})
}

// function to delete the existing address in the existing users
let deleteAddress = (req, res) => {
	UserModel.update({ 'userId': req.params.userId }, { $pull: { 'addresses': { 'addressId': req.params.addressId } } }, (err, result) => {
		if (err) {
			logger.error(err.message, 'User Controller: deleteAddress', 10)
			let apiResponse = response.generate(true, 'Error occured while deleting the address', 500, null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)) {
			logger.info('No AddressFound', 'User Controller: deleteAddress', 5)
			let apiResponse = response.generate(true, 'No AddressFound', 404, null)
			res.send(apiResponse)
		} else {
			logger.info('AddressFound', 'User Controller: deleteAddress', 5)
			let apiResponse = response.generate(false, 'address succuessfully deleted', 200, result)
			res.send(apiResponse)
		}
	})
}

module.exports = {
	createUser: createUser,
	getAllUsers: getAllUsers,
	getSingleUser: getSingleUser,
	addToCart: addToCart,
	removeFromCart: removeFromCart,
	updateCredentials: updateCredentials,
	deleteUser: deleteUser,
	increaseQty: increaseQty,
	decreaseQty: decreaseQty,
	addAddress: addAddress,
	deleteAddress: deleteAddress
}