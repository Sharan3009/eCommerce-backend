const express = require('express')
const mongoose = require('mongoose')
const ProductModel = mongoose.model('Product')
const shortid = require('shortid')
const response = require('../libs/responseLib')
const time = require('../libs/timeLib')
const check = require('../libs/checkLib')
const logger = require('../libs/loggerLib')

//this will not show any products until posted through createProduct or added manually in mongo
// function to get all products
let getAllProducts = (req,res) => {
    ProductModel.find()
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

let getSingleProduct = (req,res) => {
    ProductModel.findOne({ 'prodId' : req.params.productId },(err,result)=>{
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
    let review 
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

let deleteProduct = (req,res) => {
    ProductModel.remove({ 'prodId' : req.params.productId }, (err,result)=>{
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

let updateProduct = (req,res) => {
    let options = req.body;
    ProductModel.update({ 'prodId' : req.params.productId },options, { multi : true }, (err,result)=>{
		if(err){
			logger.error(err.message, 'Product Controller: updateProduct', 10)
			let apiResponse = response.generate(true,'Error occured while saving the Product',500,null)
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

module.exports = {
    getAllProducts : getAllProducts,
    getSingleProduct : getSingleProduct,
    createProduct : createProduct,
    deleteProduct : deleteProduct,
    updateProduct : updateProduct
}