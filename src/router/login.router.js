const KoaRouter = require('@koa/router')
const verifyPassword = require('../middleware/login.middleware')
const loginController = require('../controller/login.controller')

const loginRouter = new KoaRouter({ prefix: '/login' })

loginRouter.post('/', verifyPassword, loginController.sign)

module.exports = loginRouter
