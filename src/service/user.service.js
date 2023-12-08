const connection = require('../app/database')
class UserService {
  async create(user, ctx) {
    const { name, password } = user
    // sql语句
    const addSql = `INSERT INTO users(name,password) VALUES(?,?)`
    try {
      //添加用户
      const [val] = await connection.execute(addSql, [name, password])
      if (val.affectedRows === 1) {
        return {
          code: 0,
          data: null,
          msg: '注册用户成功～',
        }
      }
    } catch (error) {
      console.log(error, '🙁')
      ctx.app.emit('error', UNKNOW_ERROR, ctx)
      return false
    }
  }

  async findUserByName(name) {
    const sql = `SELECT * FROM users WHERE name = ?`
    const [value] = await connection.execute(sql, [name])
    return value
  }
}

module.exports = new UserService()
