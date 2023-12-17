const connection = require('../app/database')
const { UNKNOW_ERROR } = require('../config/error.config')

class LabelService {
  // 查询
  async check() {
    const sql = `SELECT * FROM labels WHERE is_delete = ? ORDER BY id DESC`
    const [value] = await connection.execute(sql, [0])
    return value
  }

  async checkById(id) {
    const sql = `SELECT * FROM labels WHERE is_delete = ? AND id = ? ORDER BY id DESC`
    const [value] = await connection.execute(sql, [0, id])
    return value
  }

  async delete(id) {
    const sql = `UPDATE labels SET is_delete = ? WHERE id = ?`
    const [value] = await connection.execute(sql, [1, id])
    if (value.affectedRows > 0) {
      return true
    } else {
      ctx.app.emit('error', UNKNOW_ERROR, ctx)
      return false
    }
  }

  async update(payload) {
    const { id, name, icon } = payload

    const sql = `UPDATE labels SET name = ?,icon = ? WHERE id = ?`
    const [value] = await connection.execute(sql, [name, icon, id])
    if (value.affectedRows > 0) {
      return true
    } else {
      ctx.app.emit('error', UNKNOW_ERROR, ctx)
      return false
    }
  }

  async create({ name, icon }) {
    try {
      const sql = `INSERT INTO labels(name, icon) VALUES(?, ?)`

      const [value] = await connection.execute(sql, [name, icon])
      if (value.affectedRows > 0) {
        return true
      } else {
        ctx.app.emit('error', UNKNOW_ERROR, ctx)
        return false
      }
    } catch (error) {
      ctx.app.emit('error', UNKNOW_ERROR, ctx)
    }
  }
}

module.exports = new LabelService()
