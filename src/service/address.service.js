const connection = require('../app/database')
const { UNKNOW_ERROR } = require('../config/error.config')

class AddressService {
  async create(info, ctx) {
    const { user_id, content, name, phone } = info
    console.log(info, 1111)
    const sql = `INSERT INTO address(user_id, content,name,phone)VALUES(?,?,?,?)`
    const [value] = await connection.execute(sql, [
      user_id,
      content,
      name,
      phone,
    ])
    if (value.affectedRows > 0) {
      return true
    } else {
      ctx.app.emit('error', UNKNOW_ERROR, ctx)
      return false
    }
  }
  // 查询
  async check(id, ctx) {
    const sql = `SELECT * FROM address WHERE user_id = ? AND is_delete = ? ORDER BY id DESC`
    const [value] = await connection.execute(sql, [id, 0])
    return value
  }

  async delete(id, ctx) {
    const sql = `UPDATE address SET is_delete = ? WHERE id = ?`
    const [value] = await connection.execute(sql, [1, id])
    if (value.affectedRows > 0) {
      return true
    } else {
      ctx.app.emit('error', UNKNOW_ERROR, ctx)
      return false
    }
  }

  async put(info, ctx) {
    const { id, content } = info
    console.log(info)
    const sql = `UPDATE address SET content = ? WHERE id = ?`
    const [value] = await connection.execute(sql, [content, id])
    if (value.affectedRows > 0) {
      return true
    } else {
      ctx.app.emit('error', UNKNOW_ERROR, ctx)
      return false
    }
  }
}

module.exports = new AddressService()
