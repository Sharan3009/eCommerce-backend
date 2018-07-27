const productController = require('../controllers/productController');
const appConfig = require('./../config/appConfig')
const auth = require('../middlewares/auth')

let setRouter = (app) => {
    let baseUrl = appConfig.apiVersion + '/products'
    app.get(baseUrl + '/all', auth.isAuthenticated, productController.getAllProducts)
    app.get(baseUrl + '/view/:productId', auth.isAuthenticated, productController.getSingleProduct)
    app.post(baseUrl + '/create',auth.isAuthenticated, productController.createProduct)
    app.post(baseUrl + '/delete/:productId',auth.isAuthenticated, productController.deleteProduct)
    app.put(baseUrl + '/edit/:productId',auth.isAuthenticated, productController.updateProduct)
}

module.exports = {
    setRouter : setRouter
}