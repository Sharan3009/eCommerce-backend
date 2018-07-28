const productController = require('../controllers/productController');
const appConfig = require('./../config/appConfig')
const auth = require('../middlewares/auth')

let setRouter = (app) => {
    let baseUrl = appConfig.apiVersion + '/products'
    app.post(baseUrl + '/create',auth.isAuthenticated, productController.createProduct)
    app.get(baseUrl + '/all', auth.isAuthenticated, productController.getAllProducts)
    app.get(baseUrl + '/view/:prodId', auth.isAuthenticated, productController.getSingleProduct)
    app.put(baseUrl + '/edit/:prodId',auth.isAuthenticated, productController.updateProduct)
    app.get(baseUrl + '/type/:type', auth.isAuthenticated, productController.getProductsByType)
    app.get(baseUrl + '/category/:category', auth.isAuthenticated, productController.getProductsByCategory)
    app.get(baseUrl + '/subcategory/:subCategory', auth.isAuthenticated, productController.getProductsBySubcategory)
    app.post(baseUrl + '/review/:prodId',auth.isAuthenticated, productController.addReview)
    app.post(baseUrl + '/:prodId/editComment/:reviewId',auth.isAuthenticated, productController.editComment)
    app.post(baseUrl + '/:prodId/removeReview/:reviewId',auth.isAuthenticated, productController.deleteReview)
    app.post(baseUrl + '/delete/:prodId',auth.isAuthenticated, productController.deleteProduct)
}

module.exports = {
    setRouter : setRouter
}