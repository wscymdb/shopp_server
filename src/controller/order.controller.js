const { UNKNOW_ERROR } = require('../config/error.config')
const OrderCartService = require('../service/order.service')
const { getFullUrl } = require('../utils/utils')

class OrderController {
  async create(ctx, next) {
    const info = ctx.request.body

    const res = await OrderCartService.create(info, ctx)
    if (res) {
      ctx.body = {
        code: 0,
        msg: 'success',
        data: null,
      }
    }
  }

  async check(ctx, next) {
    const { title } = ctx.query
    const { id } = ctx.params

    const res = await OrderCartService.check({ id, title })

    ctx.body = {
      code: 0,
      msg: 'success',
      data: res,
    }
  }

  async checkType(ctx, next) {
    const info = ctx.request.body

    let res = await OrderCartService.checkType(info)

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

    const res = await OrderCartService.delete(id)
    if (res) {
      ctx.body = {
        code: 0,
        msg: 'success',
        data: null,
      }
    }
  }

  async put(ctx, next) {
    const info = ctx.request.body

    const res = await OrderCartService.put(info)
    if (res) {
      ctx.body = {
        code: 0,
        msg: 'success',
        data: null,
      }
    }
  }
}
module.exports = new OrderController()
