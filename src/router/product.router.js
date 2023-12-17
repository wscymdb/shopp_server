const KoaRouter = require('@koa/router')
const productController = require('../controller/product.controller')
const verifyToken = require('../middleware/token.middleware')

const productRouter = new KoaRouter({ prefix: '/product' })

productRouter.post('/list', verifyToken, productController.check)

productRouter.get('/list/:id', verifyToken, productController.checkById)

productRouter.get(
  '/label/:label_id',
  verifyToken,
  productController.checkByLabel
)

productRouter.post('/create', verifyToken, productController.create)

productRouter.put('/update', verifyToken, productController.update)

productRouter.delete('/delete/:id', verifyToken, productController.delete)

module.exports = productRouter
