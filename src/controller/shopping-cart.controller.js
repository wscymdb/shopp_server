const { UNKNOW_ERROR } = require('../config/error.config')
const shoppingCartService = require('../service/shopping-cart.service')
const { getFullUrl } = require('../utils/utils')

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

    let res = await shoppingCartService.check(id)
    res = res.map((item) => {
      item.banner_path = getFullUrl(item.banner_path)
      return item
    })

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
