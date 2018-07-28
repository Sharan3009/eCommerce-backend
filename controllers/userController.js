const express = require('express')
const mongoose = require('mongoose')
const UserModel = mongoose.model('User')
const CartModel = mongoose.model('Cart')
const AddressModel = mongoose.model('Address')
const shortid = require('shortid')
const response = require('../libs/responseLib')
const check = require('../libs/checkLib')
const logger = require('../libs/loggerLib')

let addToCart = (req,res) => {
    let newCart = new CartModel({
        prodId : req.params.prodId
    })
	UserModel.findOneAndUpdate({ 'userId' : req.params.userId },{$push: {cart : newCart}},{new : true},(err,result)=>{
		if(err){
			logger.error(err.message, 'User Controller: addToCart', 10)
			let apiResponse = response.generate(true,'Error occured while adding to cart',500,null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)){
			logger.info('No User Found','User Controller: addToCart',5)
			let apiResponse = response.generate(true,'No User Found',404,null)
			res.send(apiResponse)
		} else {
			logger.info('User Found','User Controller: addToCart',5)
			let apiResponse = response.generate(false,'Product successfully added to cart',200,result)
			res.send(apiResponse)
		}
	})
}

let increaseQty = (req,res) => {
	UserModel.findOneAndUpdate({ 'userId' : req.params.userId ,'cart.prodId' : req.params.prodId},{$inc:{'cart.$.quantity':1}},{new : true}, (err,result)=>{
		if(err){
			logger.error(err.message, 'User Controller: addToCart', 10)
			let apiResponse = response.generate(true,'Error occured while adding to cart',500,null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)){
			logger.info('No User Found','User Controller: addToCart',5)
			let apiResponse = response.generate(true,'No User Found',404,null)
			res.send(apiResponse)
		} else {
			logger.info('User Found','User Controller: addToCart',5)
			let apiResponse = response.generate(false,'Product successfully added to cart',200,result)
			res.send(apiResponse)
		}
	})
}

let decreaseQty = (req,res) => {
	UserModel.findOneAndUpdate({ 'userId' : req.params.userId ,'cart.prodId' : req.params.prodId},{$inc:{'cart.$.quantity':-1}},{new : true}, (err,result)=>{
		if(err){
			logger.error(err.message, 'User Controller: addToCart', 10)
			let apiResponse = response.generate(true,'Error occured while adding to cart',500,null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)){
			logger.info('No User Found','User Controller: addToCart',5)
			let apiResponse = response.generate(true,'No User Found',404,null)
			res.send(apiResponse)
		} else {
			logger.info('User Found','User Controller: addToCart',5)
			let apiResponse = response.generate(false,'Product successfully added to cart',200,result)
			res.send(apiResponse)
		}
	})
}

let removeFromCart = (req,res) => {
	UserModel.update({ 'userId' : req.params.userId },{$pull: {'cart' : { 'prodId' : req.params.prodId }}}, (err,result)=>{
		if(err){
			logger.error(err.message, 'User Controller: removeFromCart', 10)
			let apiResponse = response.generate(true,'Error occured while removing from cart',500,null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)){
			logger.info('No Cart Found','User Controller: removeFromCart',5)
			let apiResponse = response.generate(true,'No User Found',404,null)
			res.send(apiResponse)
		} else {
			logger.info('Cart Found','User Controller: removeFromCart',5)
			let apiResponse = response.generate(false,'Product successfully removed from cart',200,result)
			res.send(apiResponse)
		}
	})
}

let createUser = (req,res) => {
    let userId = shortid.generate();
    let newUser = new UserModel({
        userId : userId,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        emailId : req.body.emailId,
        password : req.body.password,
        contactNumber : req.body.contactNumber
    })
    newUser.save((err,result)=>{
        if(err){
			logger.error(err.message, 'User Controller: createUser', 10)
			let apiResponse = response.generate(true,'Error occured saving the user',500,null)
			res.send(apiResponse)
		} else {
			logger.info('User successfully Created' ,'User Controller: createUser', 5)
			let apiResponse = response.generate(false,'User successfully created',200,result)
			res.send(apiResponse)
		}
    })
}

let getAllUsers = (req,res) => {
    UserModel.find()
	.lean()
	.exec((err,result)=>{
		if(err){
			logger.error(err.message, 'User Controller: getAllUsers', 10)
			let apiResponse = response.generate(true,'Error occured while getting all the users',500,null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)){
			logger.info('No Users Found','User Controller: getAllUsers',5)
			let apiResponse = response.generate(true,'No Users Found',404,null)
			res.send(apiResponse)
		} else {
			logger.info('Users Found','User Controller: getAllUsers',5)
			let apiResponse = response.generate(false,'Users Found',200,result)
			res.send(apiResponse)
		}
	})
}

let getSingleUser = (req,res) => {
    UserModel.findOne( { userId : req.params.userId })
	.lean()
	.exec((err,result)=>{
		if(err){
			logger.error(err.message, 'User Controller: getSingleUser', 10)
			let apiResponse = response.generate(true,'Error occured while getting the user',500,null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)){
			logger.info('No User Found','User Controller: getSingleUser',5)
			let apiResponse = response.generate(true,'No Users Found',404,null)
			res.send(apiResponse)
		} else {
			logger.info('User Found','User Controller: getSingleUser',5)
			let apiResponse = response.generate(false,'User Found',200,result)
			res.send(apiResponse)
		}
	})
}

let updateCredentials = (req,res) => {
	let options = req.body;
    UserModel.update({ 'userId' : req.params.userId },options, { multi : true }, (err,result)=>{
		if(err){
			logger.error(err.message, 'User Controller: updateCredentials', 10)
			let apiResponse = response.generate(true,'Error occured while saving the Credentials',500,null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)){
			logger.info('No User Found' ,'User Controller: updateCredentials', 5)
			let apiResponse = response.generate(true,'No User Found',404,null)
			res.send(apiResponse)
		} else {
			logger.info('User successfully Edited' ,'User Controller: updateCredentials', 5)
			let apiResponse = response.generate(false,'User successfully updated',200,result)
			res.send(apiResponse)
		}
	})
}

let deleteUser = (req,res) => {
    UserModel.remove({ 'userId' : req.params.userId }, (err,result)=>{
		if(err){
			logger.error(err.message, 'User Controller: deleteUser', 10)
			let apiResponse = response.generate(true,'Error occured while deleting the User',500,null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)){
			logger.info('No User Found' ,'User Controller: deleteUser', 5)
			let apiResponse = response.generate(true,'No User Found',404,null)
			res.send(apiResponse)
		} else {
			logger.info('User successfully Deleted' ,'User Controller: deleteUser', 5)
			let apiResponse = response.generate(false,'User successfully deleted',200,result)
			res.send(apiResponse)
		}
	})
}

let addAddress = (req,res)=>{
	let addressId = shortid.generate()
    let newAddress = new AddressModel({
		addressId : addressId,
        houseNo : req.body.houseNo,
        street : req.body.street,
        area : req.body.area,
		city : req.body.city,
		pincode : req.body.pincode
    })
	UserModel.findOneAndUpdate({ 'userId' : req.params.userId },{$push: {addresses : newAddress}},{new : true},(err,result)=>{
		if(err){
			logger.error(err.message, 'Product Controller: addReview', 10)
			let apiResponse = response.generate(true,'Error occured while getting Single Product',500,null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)){
			logger.info('No Product Found','Product Controller: addReview',5)
			let apiResponse = response.generate(true,'No Product Found',404,null)
			res.send(apiResponse)
		} else {
			logger.info('Product Found','Product Controller: addReview',5)
			let apiResponse = response.generate(false,'Comment successfully added',200,result)
			res.send(apiResponse)
		}
	})
}

let deleteAddress = (req,res)=>{
	UserModel.update({ 'userId' : req.params.userId },{ $pull : {'addresses' : { 'addressId' : req.params.addressId }}}, (err,result)=>{
		if(err){
			logger.error(err.message, 'Product Controller: getSingleProduct', 10)
			let apiResponse = response.generate(true,'Error occured while getting Single Product',500,null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)){
			logger.info('No Product Found','Product Controller: getSingleProduct',5)
			let apiResponse = response.generate(true,'No Product Found',404,null)
			res.send(apiResponse)
		} else {
			logger.info('Product Found','Product Controller: getSingleProduct',5)
			let apiResponse = response.generate(false,'Product Found',200,result)
			res.send(apiResponse)
		}
	})
}

module.exports = {
    createUser : createUser,
    getAllUsers : getAllUsers,
    getSingleUser : getSingleUser,
	addToCart : addToCart,
	removeFromCart : removeFromCart,
	updateCredentials : updateCredentials,
	deleteUser : deleteUser,
	increaseQty : increaseQty,
	decreaseQty : decreaseQty,
	addAddress : addAddress,
	deleteAddress : deleteAddress
}