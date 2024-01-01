const { UNKNOW_ERROR } = require('../config/error.config')
const shoppingCartService = require('../service/shopping-cart.service')

class CartController {
  async create(ctx, next) {
    const info = ctx.request.body

    const res = await shoppingCartService.create(info, ctx)
    if (res) {
      ctx.body = {
        code: 0,
        msg: 'success',
        data: null,
      }
    }
  }

  async check(ctx, next) {
    const { id } = ctx.params

    const res = await shoppingCartService.check(id)
    ctx.body = {
      code: 0,
      msg: 'success',
      data: res,
    }
  }

  async delete(ctx, next) {
    const { id } = ctx.params

    const res = await shoppingCartService.delete(id)
    if (res) {
      ctx.body = {
        code: 0,
        msg: 'success',
        data: null,
      }
    }
  }
}
module.exports = new CartController()
