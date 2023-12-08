const KoaRouter = require('@koa/router')
const verifyToken = require('../middleware/token.middleware')
const { handleProductBanner } = require('../middleware/file.middleware')
const fileController = require('../controller/file.controller')

const fileRouter = new KoaRouter({ prefix: '/upload' })

fileRouter.post(
  '/product_banner',
  verifyToken,
  handleProductBanner,
  fileController.createProductBanner
)

module.exports = fileRouter
