const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')

const app = new Koa()

//router
const registerRouters = require('../router')

// 应用中间件
app.use(bodyParser())
app.use(static('uploads'))
app.use(static('public'))
registerRouters(app)

// 设置代理

module.exports = app
