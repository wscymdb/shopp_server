const { UNKNOW_ERROR } = require('../config/error.config')
const AddressCartService = require('../service/address.service')

class AddressController {
  async create(ctx, next) {
    try {
      const info = ctx.request.body
      console.log(info)
      const res = await AddressCartService.create(info, ctx)
      if (res) {
        ctx.body = {
          code: 0,
          msg: 'success',
          data: null,
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  async check(ctx, next) {
    const { id } = ctx.params

    const res = await AddressCartService.check(id)
    ctx.body = {
      code: 0,
      msg: 'success',
      data: res,
    }
  }

  async delete(ctx, next) {
    const { id } = ctx.params

    const res = await AddressCartService.delete(id, ctx)
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

    const res = await AddressCartService.put(info)
    if (res) {
      ctx.body = {
        code: 0,
        msg: 'success',
        data: null,
      }
    }
  }
}
module.exports = new AddressController()
