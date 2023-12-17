const KoaRouter = require('@koa/router')
const verifyToken = require('../middleware/token.middleware')
const labelController = require('../controller/label.controller')

const labelRouter = new KoaRouter({ prefix: '/label' })

labelRouter.get('/', verifyToken, labelController.check)

labelRouter.get('/:id', verifyToken, labelController.checkById)

labelRouter.delete('/:id', verifyToken, labelController.delete)

labelRouter.put('/update', verifyToken, labelController.update)

labelRouter.post('/', verifyToken, labelController.create)

module.exports = labelRouter
