const fs = require('fs/promises')
const path = require('path')
const { getFullUrl } = require('../utils/utils')
const { UNKNOW_ERROR } = require('../config/error.config')
class FileController {
  createProductBanner(ctx, next) {
    const files = ctx.request.files
    const url = []
    files.forEach((item) => {
      url.push(getFullUrl(item.filename))
    })
    ctx.body = {
      code: 0,
      data: url,
    }
  }
  async deleteFile(ctx, next) {
    try {
      const { url } = ctx.request.body
      const fileList = await fs.readdir('./uploads')

      fileList.forEach(async (item) => {
        const fullItem = getFullUrl(item)
        if (fullItem === url) {
          await fs.unlink(`./uploads/${item}`)
          ctx.body = {
            code: 0,
            msg: 'success~',
            data: null,
          }
        }
      })
    } catch (error) {
      console.log(error, 'FileController')
      ctx.app.emit('error', UNKNOW_ERROR, ctx)
    }
  }
}

module.exports = new FileController()
