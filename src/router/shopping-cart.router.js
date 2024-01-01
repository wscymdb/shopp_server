const KoaRouter = require('@koa/router')
const verifyToken = require('../middleware/token.middleware')
const CartController = require('../controller/shopping-cart.controller')

const cartRouter = new KoaRouter({ prefix: '/cart' })

cartRouter.get('/:id', verifyToken, CartController.check)

cartRouter.post('/create', verifyToken, CartController.create)

cartRouter.delete('/:id', verifyToken, CartController.delete)

module.exports = cartRouter
