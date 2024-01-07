const KoaRouter = require('@koa/router')
const verifyToken = require('../middleware/token.middleware')
const OrderController = require('../controller/order.controller')

const orderRouter = new KoaRouter({ prefix: '/order' })

orderRouter.get('/:id', verifyToken, OrderController.check)

orderRouter.post('/checkType', verifyToken, OrderController.checkType)

orderRouter.post('/create', verifyToken, OrderController.create)

orderRouter.delete('/:id', verifyToken, OrderController.delete)

module.exports = orderRouter
