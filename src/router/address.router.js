const KoaRouter = require('@koa/router')
const verifyToken = require('../middleware/token.middleware')
const AddressController = require('../controller/address.controller')

const addressRouter = new KoaRouter({ prefix: '/address' })

// 根据user_id查询
addressRouter.get('/:id', verifyToken, AddressController.check)

addressRouter.post('/create', verifyToken, AddressController.create)
// 删除
addressRouter.delete('/:id', verifyToken, AddressController.delete)

// 修改过
addressRouter.put('/put', verifyToken, AddressController.put)

module.exports = addressRouter
