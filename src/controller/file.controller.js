const { SERVER_PORT, SERVER_HOST } = require('../config/server.config')
class FileController {
  createProductBanner(ctx, next) {
    const files = ctx.request.files
    const url = []
    files.forEach((item) => {
      url.push(`http://${SERVER_HOST}:${SERVER_PORT}/${item.filename}`)
    })
    ctx.body = {
      code: 0,
      data: url,
    }
  }
}

module.exports = new FileController()
