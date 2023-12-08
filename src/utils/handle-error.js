const app = require('../app')
const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_IS_ALREADY_EXISTS,
  UNKNOW_ERROR,
  NAME_OR_PASSWORD_IS_INCORRECT,
  UNAUTHORIZATION,
  UNPERMISSION,
} = require('../config/error.config')

app.on('error', (error, ctx) => {
  let code = 0
  let msg = ''

  switch (error) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      code = -1001
      msg = '用户名或密码不能为空～'
      break

    case NAME_IS_ALREADY_EXISTS:
      code = -1002
      msg = '用户名已经被占用,请重新输入～'
      break

    case NAME_OR_PASSWORD_IS_INCORRECT:
      code = -1003
      msg = '用户名或密码错误，请重新输入～'
      break

    case UNAUTHORIZATION:
      code = -1004
      msg = '无效的token～'
      break

    case UNKNOW_ERROR:
      code = -1111
      msg = '未知错误，请联系管理员～'
      break

    case UNPERMISSION:
      code = -1112
      msg = '没有权限执行该操作～'
      break
  }
  console.log(error, code, msg)
  ctx.body = {
    code,
    msg,
  }
})
