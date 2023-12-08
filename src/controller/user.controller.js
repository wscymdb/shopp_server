const userService = require('../service/user.service')

class UserController {
  async create(ctx, next) {
    const info = ctx.request.body
    // 数据库操作 添加用户
    const result = await userService.create(info, ctx)
    if (result) {
      ctx.body = result
    }
  }
}

module.exports = new UserController()
