const { UNKNOW_ERROR } = require('../config/error.config')
const labelService = require('../service/label.service')
class LabelController {
  async check(ctx, next) {
    const res = await labelService.check()

    ctx.body = {
      code: 0,
      msg: 'success~',
      data: res,
    }
  }

  async checkById(ctx, next) {
    const { id } = ctx.params
    const [res] = await labelService.checkById(id, ctx)

    ctx.body = {
      code: 0,
      msg: 'success~',
      data: res,
    }
  }

  async delete(ctx, next) {
    const { id } = ctx.params
    if (!id) return ctx.app.emit('error', UNKNOW_ERROR, ctx)

    const res = await labelService.delete(id, ctx)
    if (res) {
      ctx.body = {
        code: 0,
        msg: 'success~',
        data: res,
      }
    }
  }

  async update(ctx, next) {
    const { id, name, icon } = ctx.request.body

    if (!id || !name || !icon) return ctx.app.emit('error', UNKNOW_ERROR, ctx)
    const res = await labelService.update({ id, name, icon })
    if (res) {
      ctx.body = {
        code: 0,
        msg: 'success~',
        data: res,
      }
    }
  }

  async create(ctx, next) {
    const { name, icon } = ctx.request.body
    if (!name || !icon) return ctx.app.emit('error', UNKNOW_ERROR, ctx)

    const len = await labelService.check()
    if (len.length >= 8)
      return (ctx.body = {
        code: -1,
        msg: '只能创建8条～',
        data: null,
      })

    const res = await labelService.create({ name, icon })
    if (res) {
      ctx.body = {
        code: 0,
        msg: 'success~',
        data: res,
      }
    }
  }
}

module.exports = new LabelController()
