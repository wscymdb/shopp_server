const { UNKNOW_ERROR } = require('../config/error.config')
const productService = require('../service/product.service')

class ProductController {
  async create(ctx, next) {
    const info = ctx.request.body

    const res = await productService.create(info, ctx)
    if (res) {
      ctx.body = {
        code: 0,
        msg: 'success',
        data: null,
      }
    }
  }
  async update(ctx, next) {
    const info = ctx.request.body
    const res = await productService.update(info, ctx)
    if (res) {
      ctx.body = {
        code: 0,
        msg: 'success',
        data: null,
      }
    }
  }
  async delete(ctx, next) {
    const { id } = ctx.params
    const res = await productService.delete(id, ctx)
    if (res) {
      ctx.body = {
        code: 0,
        msg: 'success',
        data: null,
      }
    }
  }

  async check(ctx, next) {
    let { page, row } = ctx.request.body
    // 处理分页
    if (!page) page = 1
    if (!row) row = 10
    page = row * (page - 1)

    const res = await productService.check({ page, row })
    const [{ total }] = await productService.checkTotal()
    ctx.body = {
      code: 0,
      msg: 'success',
      data: res,
      total,
    }
  }

  async checkById(ctx, next) {
    const { id } = ctx.params
    let res = await productService.checkById(id)
    if (res.length) res = res[0]
    ctx.body = {
      code: 0,
      msg: 'success',
      data: res,
    }
  }

  async checkByLabel(ctx, next) {
    const { label_id } = ctx.params

    let res = await productService.checkByLabel(label_id)
    if (res.length) res = res
    ctx.body = {
      code: 0,
      msg: 'success',
      data: res,
    }
  }
}
module.exports = new ProductController()
