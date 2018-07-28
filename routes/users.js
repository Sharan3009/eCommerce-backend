const userController = require('../controllers/userController');
const appConfig = require('./../config/appConfig')
const auth = require('../middlewares/auth')

let setRouter = (app) => {
    let baseUrl = appConfig.apiVersion + '/users'
    app.post(baseUrl + '/create', userController.createUser)
    app.get(baseUrl + '/all', auth.isAuthenticated, userController.getAllUsers)
    app.get(baseUrl + '/user/:userId', auth.isAuthenticated, userController.getSingleUser)
    app.put(baseUrl + '/edit/:userId', auth.isAuthenticated, userController.updateCredentials)
    app.post(baseUrl + '/:userId/cart/:prodId', userController.addToCart)
    app.post(baseUrl + '/:userId/increaseQty/:prodId' , auth.isAuthenticated , userController.increaseQty)
    app.post(baseUrl + '/:userId/decreaseQty/:prodId' , auth.isAuthenticated , userController.decreaseQty)
    app.post(baseUrl + '/:userId/removeCart/:prodId', userController.removeFromCart)
    app.post(baseUrl + '/address/:userId' , auth.isAuthenticated , userController.addAddress)
    app.post(baseUrl + '/:userId/deleteAddress/:addressId' , auth.isAuthenticated , userController.deleteAddress)
    app.post(baseUrl + '/delete/:userId', auth.isAuthenticated, userController.deleteUser)
}

module.exports = {
    setRouter : setRouter
}