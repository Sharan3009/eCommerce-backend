const productController = require('../controllers/productController');
const appConfig = require('./../config/appConfig')
const auth = require('../middlewares/auth')

let setRouter = (app) => {
    let baseUrl = appConfig.apiVersion + '/products'
    app.post(baseUrl + '/create',auth.isAuthenticated, productController.createProduct)
    /**
	 * @api {post} /api/v1/products/create Create Product
	 * @apiVersion 0.0.1
	 * @apiGroup Create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} type type of the product passed as a body parameter
     * @apiParam {String} category category of the product passed as a body parameter
     * @apiParam {String} subCategory subCategory of the product passed as a body parameter
     * @apiParam {String} prodName prodName of the product passed as a body parameter
     * @apiParam {String} prodBrand prodBrand of the product passed as a body parameter
     * @apiParam {Boolean} isFeatured isFeatured of the product passed as a body parameter
     * @apiParam {String} description description of the product passed as a body parameter
     * @apiParam {Number} price price of the product passed as a body parameter
     * @apiParam {String} imgUrl imgUrl of the product passed as a body parameter
     * @apiParam {String} otherImages urls of the product images separated with commas passed as a body parameter
     * @apiParam {Boolean} availability availability of the product passed as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * {
            "error": false,
            "message": "Product successfully created",
            "status": 200,
            "data": {
                "type": string,
                "category": string,
                "subCategory": string,
                "prodName": string,
                "prodBrand": string,
                "isFeatured": boolean,
                "description": string,
                "price": number,
                "imgUrl": string,
                "otherImgs": object(type = array),
                "availability": boolean,
                "_id": string,
                "prodId": string,
                "productCreated": string,
                "reviews": object(type = array),
                "__v": number
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error occured saving the product",
	    "status": 500,
	    "data": null
	   }
	 */
    app.get(baseUrl + '/all', auth.isAuthenticated, productController.getAllProducts)
    /**
	 * @api {get} /api/v1/products/all Get All Products
	 * @apiVersion 0.0.1
	 * @apiGroup Read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * 
     * {
            "error": false,
            "message": "Products Found",
            "status": 200,
            "data": [
                {
                    "type": string,
                    "category": string,
                    "subCategory": string,
                    "prodName": string,
                    "prodBrand": string,
                    "isFeatured": boolean,
                    "description": string,
                    "price": number,
                    "imgUrl": string,
                    "otherImgs":object(type = array),
                    "availability": boolean,
                    "prodId": string,
                    "productCreated": string,
                    "reviews": object(type = array)
                }
            ]
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error occured while getting all the products",
	    "status": 500,
	    "data": null
	   }
	 */
    app.get(baseUrl + '/view/:prodId', auth.isAuthenticated, productController.getSingleProduct)
     /**
	 * @api {get} /api/v1/products/view/:prodId Get Single Product
	 * @apiVersion 0.0.1
	 * @apiGroup Read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} prodId prodId of the product passed as a route parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * 
     * {
            "error": false,
            "message": "Products Found",
            "status": 200,
            "data":{
                    "type": string,
                    "category": string,
                    "subCategory": string,
                    "prodName": string,
                    "prodBrand": string,
                    "isFeatured": boolean,
                    "description": string,
                    "price": number,
                    "imgUrl": string,
                    "otherImgs":object(type = array),
                    "availability": boolean,
                    "prodId": string,
                    "productCreated": string,
                    "reviews": object(type = array)
                }   
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error occured while getting Single product",
	    "status": 500,
	    "data": null
	   }
	 */
    app.put(baseUrl + '/edit/:prodId',auth.isAuthenticated, productController.updateProduct)
    /**
	 * @api {put} /api/v1/products/edit/:prodId Update Product
	 * @apiVersion 0.0.1
	 * @apiGroup Update
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} prodId prodId of the product passed as a route parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * 
     * {
            "error": false,
            "message": "Product successfully updated",
            "status": 200,
            "data": {
                "n": 1,
                "nModified": 1,
                "ok": 1
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error occured while editing the Product",
	    "status": 500,
	    "data": null
	   }
	 */
    app.get(baseUrl + '/type/:type', auth.isAuthenticated, productController.getProductsByType)
    /**
	 * @api {get} /api/v1/products/type/:type Get Products of the type
	 * @apiVersion 0.0.1
	 * @apiGroup Read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} type type of the product passed as a route parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * 
     * {
            "error": false,
            "message": "Products Found",
            "status": 200,
            "data":{
                    "type": string,
                    "category": string,
                    "subCategory": string,
                    "prodName": string,
                    "prodBrand": string,
                    "isFeatured": boolean,
                    "description": string,
                    "price": number,
                    "imgUrl": string,
                    "otherImgs":object(type = array),
                    "availability": boolean,
                    "prodId": string,
                    "productCreated": string,
                    "reviews": object(type = array)
                }   
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error occured while getting all the products",
	    "status": 500,
	    "data": null
	   }
	 */
    app.get(baseUrl + '/category/:category', auth.isAuthenticated, productController.getProductsByCategory)
    /**
	 * @api {get} /api/v1/products/category/:category Get Products of the category
	 * @apiVersion 0.0.1
	 * @apiGroup Read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} category category of the product passed as a route parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * 
     * {
            "error": false,
            "message": "Products Found",
            "status": 200,
            "data":{
                    "type": string,
                    "category": string,
                    "subCategory": string,
                    "prodName": string,
                    "prodBrand": string,
                    "isFeatured": boolean,
                    "description": string,
                    "price": number,
                    "imgUrl": string,
                    "otherImgs":object(type = array),
                    "availability": boolean,
                    "prodId": string,
                    "productCreated": string,
                    "reviews": object(type = array)
                }   
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error occured while getting all the products",
	    "status": 500,
	    "data": null
	   }
	 */
    app.get(baseUrl + '/subcategory/:subCategory', auth.isAuthenticated, productController.getProductsBySubcategory)
    /**
	 * @api {get} /api/v1/products/subCategory/:subCategory Get Products of the subCategory
	 * @apiVersion 0.0.1
	 * @apiGroup Read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} subCategory subCategory of the product passed as a route parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * 
     * {
            "error": false,
            "message": "Products Found",
            "status": 200,
            "data":{
                    "type": string,
                    "category": string,
                    "subCategory": string,
                    "prodName": string,
                    "prodBrand": string,
                    "isFeatured": boolean,
                    "description": string,
                    "price": number,
                    "imgUrl": string,
                    "otherImgs":object(type = array),
                    "availability": boolean,
                    "prodId": string,
                    "productCreated": string,
                    "reviews": object(type = array)
                }   
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error occured while getting all the products",
	    "status": 500,
	    "data": null
	   }
	 */
    app.post(baseUrl + '/review/:prodId',auth.isAuthenticated, productController.addReview)
    /**
	 * @api {post} /api/v1/products/review/:prodId Create review
	 * @apiVersion 0.0.1
	 * @apiGroup Create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} prodId prodId of the product passed as a route parameter
     * @apiParam {String} name name of the product passed as a body parameter
     * @apiParam {String} comment comment of the product passed as a body parameter
     * @apiParam {Number} rating rating of the product passed as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * {
            "error": false,
            "message": "Comment successfully added",
            "status": 200,
            "data": {
                "type": string,
                "category": string,
                "subCategory": string,
                "prodName": string,
                "prodBrand": string,
                "isFeatured": boolean,
                "description": string,
                "price": number,
                "imgUrl": string,
                "otherImgs": object(type = array),
                "availability": boolean,
                "_id": string,
                "prodId": string,
                "productCreated": string,
                "reviews": [
                    {
                        "rating": number,
                        "postedTime": string,
                        "_id": string,
                        "reviewId": string,
                        "name": string,
                        "comment": string
                    }
                ],
                "__v": number
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error occured while adding the review",
	    "status": 500,
	    "data": null
	   }
	 */
    app.post(baseUrl + '/:prodId/editComment/:reviewId',auth.isAuthenticated, productController.editComment)
    /**
	 * @api {post} /api/v1/products/:prodId/editComment/:reviewId Edit Comment
	 * @apiVersion 0.0.1
	 * @apiGroup Create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} prodId prodId of the product passed as a route parameter
     * @apiParam {String} reviewId reviewId of the product passed as a route parameter
     * @apiParam {String} comment comment of the product passed as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * {
            "error": false,
            "message": "Comment successfully edited",
            "status": 200,
            "data": {
                "type": string,
                "category": string,
                "subCategory": string,
                "prodName": string,
                "prodBrand": string,
                "isFeatured": boolean,
                "description": string,
                "price": number,
                "imgUrl": string,
                "otherImgs": object(type = array),
                "availability": boolean,
                "_id": string,
                "prodId": string,
                "productCreated": string,
                "reviews": [
                    {
                        "rating": number,
                        "postedTime": string,
                        "_id": string,
                        "reviewId": string,
                        "name": string,
                        "comment": string
                    }
                ],
                "__v": number
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error occured while editing the review",
	    "status": 500,
	    "data": null
	   }
	 */
    app.post(baseUrl + '/:prodId/removeReview/:reviewId',auth.isAuthenticated, productController.deleteReview)
    /**
	 * @api {post} /api/v1/products/:prodId/removeReview/:reviewId Delete Review
	 * @apiVersion 0.0.1
	 * @apiGroup Create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} prodId prodId of the product passed as a route parameter
     * @apiParam {String} reviewId reviewId of the product passed as a route parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * {
            "error": false,
            "message": "Comment successfully deleted",
            "status": 200,
            "data": {
                "type": string,
                "category": string,
                "subCategory": string,
                "prodName": string,
                "prodBrand": string,
                "isFeatured": boolean,
                "description": string,
                "price": number,
                "imgUrl": string,
                "otherImgs": object(type = array),
                "availability": boolean,
                "_id": string,
                "prodId": string,
                "productCreated": string,
                "reviews": [
                    {
                        "rating": number,
                        "postedTime": string,
                        "_id": string,
                        "reviewId": string,
                        "name": string,
                        "comment": string
                    }
                ],
                "__v": number
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error occured while deleting the review",
	    "status": 500,
	    "data": null
	   }
	 */
    app.post(baseUrl + '/delete/:prodId',auth.isAuthenticated, productController.deleteProduct)
     /**
	 * @api {post} /api/v1/products/delete/:prodId Delete Product
	 * @apiVersion 0.0.1
	 * @apiGroup Create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} prodId prodId of the product passed as a route parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * {
            "error": false,
            "message": "Product successfully deleted",
            "status": 200,
            "data": {
                "n": 1,
                "ok": 1
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error occured saving the product",
	    "status": 500,
	    "data": null
	   }
	 */
}

module.exports = {
    setRouter : setRouter
}