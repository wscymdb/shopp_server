const KoaRouter = require('@koa/router')
const { verifyUser, handlePassword } = require('../middleware/user.middleware')
const userController = require('../controller/user.controller')

const userRouter = new KoaRouter({ prefix: '/user' })

userRouter.post(
  '/registryUser',
  verifyUser,
  handlePassword,
  userController.create
)

module.exports = userRouter
