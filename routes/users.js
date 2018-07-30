const userController = require('../controllers/userController');
const appConfig = require('./../config/appConfig')
const auth = require('../middlewares/auth')

let setRouter = (app) => {
    let baseUrl = appConfig.apiVersion + '/users'
    app.post(baseUrl + '/create', userController.createUser)
    /**
	 * @api {post} /api/v1/users/create Create User
	 * @apiVersion 0.0.1
	 * @apiGroup Create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} firstName firstName of the user passed as a body parameter
     * @apiParam {String} lastName lastName of the user passed as a body parameter
     * @apiParam {String} emailId emailId of the user passed as a body parameter
     * @apiParam {String} password password of the user passed as a body parameter
     * @apiParam {Number} contactNumber contactNumber of the user passed as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * {
            "error": false,
            "message": "User successfully created",
            "status": 200,
            "data": {
                "isPrime": boolean,
                "_id": string,
                "userId": string,
                "firstName": string,
                "lastName": string,
                "emailId": string,
                "password": string,
                "contactNumber": number,
                "cart": [],
                "addresses": [],
                "__v": number
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error occured saving the user",
	    "status": 500,
	    "data": null
	   }
	 */
    app.get(baseUrl + '/all', auth.isAuthenticated, userController.getAllUsers)
    /**
	 * @api {get} /api/v1/users/all Get All Users
	 * @apiVersion 0.0.1
	 * @apiGroup Read 
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * {
            "error": false,
            "message": "Users found",
            "status": 200,
            "data": [
                    {
                    "isPrime": boolean,
                    "userId": string,
                    "firstName": string,
                    "lastName": string,
                    "emailId": string,
                    "password": string,
                    "contactNumber": number,
                    "cart": [],
                    "addresses": [],
                }
            ]
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error occured while getting all the users",
	    "status": 500,
	    "data": null
	   }
	 */
    app.get(baseUrl + '/user/:userId', auth.isAuthenticated, userController.getSingleUser)
    /**
	 * @api {get} /api/v1/users/user/:userId Get Single User
	 * @apiVersion 0.0.1
	 * @apiGroup Read 
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} userId userId of the user passed as a route parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * {
            "error": false,
            "message": "User found",
            "status": 200,
            "data": {
                "isPrime": boolean,
                "userId": string,
                "firstName": string,
                "lastName": string,
                "emailId": string,
                "password": string,
                "contactNumber": number,
                "cart": [],
                "addresses": [],
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error occured while getting the user",
	    "status": 500,
	    "data": null
	   }
	 */
    app.put(baseUrl + '/edit/:userId', auth.isAuthenticated, userController.updateCredentials)
    /**
	 * @api {put} /api/v1/users/edit/:userId Update User Credentials
	 * @apiVersion 0.0.1
	 * @apiGroup Update 
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} userId userId of the user passed as a route parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * {
            "error": false,
            "message": "User successfully updated",
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
	    "message": "Error occured while updating the Credentials",
	    "status": 500,
	    "data": null
	   }
	 */
    app.post(baseUrl + '/:userId/cart/:prodId', userController.addToCart)
    /**
	 * @api {post} /api/v1/users/:userId/cart/:prodId adding Product to cart
	 * @apiVersion 0.0.1
	 * @apiGroup Create 
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} userId userId of the user passed as a route parameter
     * @apiParam {String} prodId prodId of the product passed as a route parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * {
            "error": false,
            "message": "Product successfully added to cart",
            "status": 200,
            "data": {
                "isPrime": boolean,
                "_id": string,
                "userId": string,
                "firstName": string,
                "lastName": string,
                "emailId": string,
                "password": string,
                "contactNumber": number,
                "cart": [
                    {
                        "quantity": 1,
                        "prodId": string
                    }
                ],
                "addresses": [],
                "__v": number
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error occured while adding to cart",
	    "status": 500,
	    "data": null
	   }
	 */
    app.post(baseUrl + '/:userId/increaseQty/:prodId', auth.isAuthenticated, userController.increaseQty)
    /**
	 * @api {post} /api/v1/users/:userId/increaseQty/:prodId Increasing quantity of cart by 1
	 * @apiVersion 0.0.1
	 * @apiGroup Update 
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} userId userId of the user passed as a route parameter
     * @apiParam {String} prodId prodId of the product passed as a route parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * {
            "error": false,
            "message": "Quantity successfully increased",
            "status": 200,
            "data": {
                "isPrime": boolean,
                "_id": string,
                "userId": string,
                "firstName": string,
                "lastName": string,
                "emailId": string,
                "password": string,
                "contactNumber": number,
                "cart": [
                    {
                        "quantity": number,
                        "prodId": string
                    }
                ],
                "addresses": [],
                "__v": number
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error occured while increasing quantity",
	    "status": 500,
	    "data": null
	   }
	 */
    app.post(baseUrl + '/:userId/decreaseQty/:prodId', auth.isAuthenticated, userController.decreaseQty)
    /**
	 * @api {post} /api/v1/users/:userId/decreaseQty/:prodId Decreasing quantity of cart by 1
	 * @apiVersion 0.0.1
	 * @apiGroup Update 
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} userId userId of the user passed as a route parameter
     * @apiParam {String} prodId prodId of the product passed as a route parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * {
            "error": false,
            "message": "Quantity successfully decreased",
            "status": 200,
            "data": {
                "isPrime": boolean,
                "_id": string,
                "userId": string,
                "firstName": string,
                "lastName": string,
                "emailId": string,
                "password": string,
                "contactNumber": number,
                "cart": [
                    {
                        "quantity": number,
                        "prodId": string
                    }
                ],
                "addresses": [],
                "__v": number
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error occured while decreasing quantity",
	    "status": 500,
	    "data": null
	   }
	 */
    app.post(baseUrl + '/:userId/removeCart/:prodId', userController.removeFromCart)
    /**
	 * @api {post} /api/v1/users/:userId/removeCart/:prodId Removing Product from cart
	 * @apiVersion 0.0.1
	 * @apiGroup Delete 
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} userId userId of the user passed as a route parameter
     * @apiParam {String} prodId prodId of the product passed as a route parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * {
            "error": false,
            "message": "Product successfully removed from cart",
            "status": 200,
            "data": {
                "isPrime": boolean,
                "_id": string,
                "userId": string,
                "firstName": string,
                "lastName": string,
                "emailId": string,
                "password": string,
                "contactNumber": number,
                "cart": [],
                "addresses": [],
                "__v": number
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error occured while removing from cart",
	    "status": 500,
	    "data": null
	   }
	 */
    app.post(baseUrl + '/address/:userId', auth.isAuthenticated, userController.addAddress)
    /**
	 * @api {post} /api/v1/users/address/:userId Add address of the user
	 * @apiVersion 0.0.1
	 * @apiGroup Delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} userId userId of the user passed as a route parameter
     * @apiParam {Number} houseNo houseNo of the user passed as a body parameter
     * @apiParam {String} street street of the user passed as a body parameter
     * @apiParam {String} area area of the user passed as a body parameter
     * @apiParam {String} city city of the user passed as a body parameter
     * @apiParam {Number} pincode pincode of the user passed as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * {
            "error": false,
            "message": "address successfully added",
            "status": 200,
            "data": {
                "isPrime": boolean,
                "_id": string,
                "userId": string,
                "firstName": string,
                "lastName": string,
                "emailId": string,
                "password": string,
                "contactNumber": number,
                "cart": [],
                "addresses": [
                    {
                        "_id": string,
                        "addressId": string,
                        "houseNo": number,
                        "street": string,
                        "area": string,
                        "city": string,
                        "pincode": number
                    }
                ],
                "__v": number
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error occured while adding the address",
	    "status": 500,
	    "data": null
	   }
	 */
    app.post(baseUrl + '/:userId/deleteAddress/:addressId', auth.isAuthenticated, userController.deleteAddress)
    /**
	 * @api {post} /api/v1/users/:userId/deleteAddress/:addressId Delete address of the user
	 * @apiVersion 0.0.1
	 * @apiGroup Delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} userId userId of the user passed as a route parameter
     * @apiParam {Number} addressId addressId of the user passed as a route parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * {
            "error": false,
            "message": "address successfully deleted",
            "status": 200,
            "data": {
                "isPrime": boolean,
                "_id": string,
                "userId": string,
                "firstName": string,
                "lastName": string,
                "emailId": string,
                "password": string,
                "contactNumber": number,
                "cart": [],
                "addresses": [],
                "__v": number
            }
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error occured while deleting the address",
	    "status": 500,
	    "data": null
	   }
	 */
    app.post(baseUrl + '/delete/:userId', auth.isAuthenticated, userController.deleteUser)
    /**
	 * @api {post} /api/v1/users/delete/:userId Delete user
	 * @apiVersion 0.0.1
	 * @apiGroup Delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} userId userId of the user passed as a route parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
     * {
            "error": false,
            "message": "User successfully deleted",
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
	    "message": "Error occured while deleting the user",
	    "status": 500,
	    "data": null
	   }
	 */
}

module.exports = {
    setRouter: setRouter
}