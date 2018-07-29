const express = require('express')
const mongoose = require('mongoose')
const ProductModel = mongoose.model('Product')
const CommentModel = mongoose.model('Comment')
const shortid = require('shortid')
const response = require('../libs/responseLib')
const time = require('../libs/timeLib')
const check = require('../libs/checkLib')
const logger = require('../libs/loggerLib')

//this will not show any products until posted through createProduct or added manually in mongo
// function to get all products
let getAllProducts = (req,res) => {
	ProductModel.find()
	.select('-_id -__v')
	.lean()
	.exec((err,result)=>{
		if(err){
			logger.error(err.message, 'Product Controller: getAllProducts', 10)
			let apiResponse = response.generate(true,'Error occured while getting all the products',500,null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)){
			logger.info('No Products Found','Product Controller: getAllProducts',5)
			let apiResponse = response.generate(true,'No Products Found',404,null)
			res.send(apiResponse)
		} else {
			logger.info('Products Found','Product Controller: getAllProducts',5)
			let apiResponse = response.generate(false,'Products Found',200,result)
			res.send(apiResponse)
		}
	})
}

// function to get single product with prodId
let getSingleProduct = (req,res) => {
    ProductModel.findOne({ 'prodId' : req.params.prodId },(err,result)=>{
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
	.select('-_id -__v')
}

// function to create new product
let createProduct = (req,res) => {
	let prodId = shortid.generate();
	let productCreated = time.now()
    let newProduct = new ProductModel({
        prodId : prodId,
        type : req.body.type,
        category : req.body.category,
        subCategory : req.body.subCategory,
        prodName : req.body.prodName,
        prodBrand : req.body.prodBrand,
        isFeatured : req.body.isFeatured,
        description : req.body.description,
        price : req.body.price,
		imgUrl : req.body.imgUrl,
		productCreated : productCreated,
        availability : req.body.availability
    })
    let otherImgs = (req.body.otherImgs != undefined && req.body.otherImgs != null && req.body.otherImgs !='')?req.body.otherImgs.split(','):[]
    newProduct.otherImgs = otherImgs;
    newProduct.save((err,result)=>{
        if(err){
			logger.error(err.message, 'Product Controller: createProduct', 10)
			let apiResponse = response.generate(true,'Error occured saving the product',500,null)
			res.send(apiResponse)
		} else {
			logger.info('Product successfully Created' ,'Product Controller: createProduct', 5)
			let apiResponse = response.generate(false,'Product successfully created',200,result)
			res.send(apiResponse)
		}
	})
}

// function to delete the product with prodId
let deleteProduct = (req,res) => {
    ProductModel.remove({ 'prodId' : req.params.prodId }, (err,result)=>{
		if(err){
			logger.error(err.message, 'Product Controller: deleteProduct', 10)
			let apiResponse = response.generate(true,'Error occured while deleting the Product',500,null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)){
			logger.info('No Product Found' ,'Product Controller: deleteProduct', 5)
			let apiResponse = response.generate(true,'No Product Found',404,null)
			res.send(apiResponse)
		} else {
			logger.info('Product successfully Deleted' ,'Product Controller: deleteProduct', 5)
			let apiResponse = response.generate(false,'Product successfully deleted',200,result)
			res.send(apiResponse)
		}
	})
}

// function to update the product with proId
let updateProduct = (req,res) => {
    let options = req.body;
    ProductModel.update({ 'prodId' : req.params.prodId },options, { multi : true }, (err,result)=>{
		if(err){
			logger.error(err.message, 'Product Controller: updateProduct', 10)
			let apiResponse = response.generate(true,'Error occured while editing the Product',500,null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)){
			logger.info('No Product Found' ,'Product Controller: updateProduct', 5)
			let apiResponse = response.generate(true,'No Product Found',404,null)
			res.send(apiResponse)
		} else {
			logger.info('Product successfully Edited' ,'Product Controller: updateProduct', 5)
			let apiResponse = response.generate(false,'Product successfully updated',200,result)
			res.send(apiResponse)
		}
	})
}

// function to add the review in existing product
let addReview = (req,res)=>{
	let postedTime = time.now()
	let reviewId = shortid.generate()
    let newComment = new CommentModel({
		reviewId : reviewId,
        name : req.body.name,
        comment : req.body.comment,
        rating : req.body.rating,
        postedTime : postedTime
    })
	ProductModel.findOneAndUpdate({ 'prodId' : req.params.prodId },{$push: {reviews : newComment}},{new : true},(err,result)=>{
		if(err){
			logger.error(err.message, 'Product Controller: addReview', 10)
			let apiResponse = response.generate(true,'Error occured while adding the review',500,null)
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

// function to delete existing review in existing product
let deleteReview = (req,res)=>{
	ProductModel.update({ 'prodId' : req.params.prodId },{ $pull : {'reviews' : { 'reviewId' : req.params.reviewId }}}, (err,result)=>{
		if(err){
			logger.error(err.message, 'Product Controller: deleteReview', 10)
			let apiResponse = response.generate(true,'Error occured while deleting the review',500,null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)){
			logger.info('No review Found','Product Controller: deleteReview',5)
			let apiResponse = response.generate(true,'No review Found',404,null)
			res.send(apiResponse)
		} else {
			logger.info('Review Found','Product Controller: deleteReview',5)
			let apiResponse = response.generate(false,'Review Found',200,result)
			res.send(apiResponse)
		}
	})
}

// function to get products of the given "Type"
let getProductsByType = (req,res) => {
	ProductModel.find( { type : req.params.type } )
	.select('-_id -__v')
	.lean()
	.exec((err,result)=>{
		if(err){
			logger.error(err.message, 'Product Controller: getProductsByType', 10)
			let apiResponse = response.generate(true,'Error occured while getting all the products',500,null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)){
			logger.info('No Products Found','Product Controller: getProductsByType',5)
			let apiResponse = response.generate(true,'No Products Found',404,null)
			res.send(apiResponse)
		} else {
			logger.info('Products Found','Product Controller: getProductsByType',5)
			let apiResponse = response.generate(false,'Products Found',200,result)
			res.send(apiResponse)
		}
	})
}

// function to get products of the given "Category"
let getProductsByCategory = (req,res) => {
	ProductModel.find( { category : req.params.category } )
	.select('-_id -__v')
	.lean()
	.exec((err,result)=>{
		if(err){
			logger.error(err.message, 'Product Controller: getProductsByCategory', 10)
			let apiResponse = response.generate(true,'Error occured while getting all the products',500,null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)){
			logger.info('No Products Found','Product Controller: getProductsByCategory',5)
			let apiResponse = response.generate(true,'No Products Found',404,null)
			res.send(apiResponse)
		} else {
			logger.info('Products Found','Product Controller: getProductsByCategory',5)
			let apiResponse = response.generate(false,'Products Found',200,result)
			res.send(apiResponse)
		}
	})
}

// function to get products of the given "subCategory"
let getProductsBySubcategory = (req,res) => {
	ProductModel.find( { subCategory : req.params.subCategory } )
	.select('-_id -__v')
	.lean()
	.exec((err,result)=>{
		if(err){
			logger.error(err.message, 'Product Controller: getProductsBySubcategory', 10)
			let apiResponse = response.generate(true,'Error occured while getting all the products',500,null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)){
			logger.info('No Products Found','Product Controller: getProductsBySubcategory',5)
			let apiResponse = response.generate(true,'No Products Found',404,null)
			res.send(apiResponse)
		} else {
			logger.info('Products Found','Product Controller: getProductsBySubcategory',5)
			let apiResponse = response.generate(false,'Products Found',200,result)
			res.send(apiResponse)
		}
	})
}

// function to edit the Comment of existing review in the existing product
let editComment = (req,res) => {
	ProductModel.findOneAndUpdate({ 'prodId' : req.params.prodId ,'reviews.reviewId' : req.params.reviewId},{'reviews.$.comment':req.body.comment , 'reviews.$.postedTime': time.now()},{new : true}, (err,result)=>{
		if(err){
			logger.error(err.message, 'Product Controller: editComment', 10)
			let apiResponse = response.generate(true,'Error occured while editing the comment',500,null)
			res.send(apiResponse)
		} else if (check.isEmpty(result)){
			logger.info('No Review Found','Product Controller: editComment',5)
			let apiResponse = response.generate(true,'No Review Found',404,null)
			res.send(apiResponse)
		} else {
			logger.info('Review Found','Product Controller: editComment',5)
			let apiResponse = response.generate(false,'Review successfully edited',200,result)
			res.send(apiResponse)
		}
	})
}


module.exports = {
    getAllProducts : getAllProducts,
    getSingleProduct : getSingleProduct,
    createProduct : createProduct,
    deleteProduct : deleteProduct,
	updateProduct : updateProduct,
	addReview : addReview,
	getProductsByType : getProductsByType,
	getProductsByCategory : getProductsByCategory,
	getProductsBySubcategory : getProductsBySubcategory,
	deleteReview : deleteReview,
	editComment : editComment
}