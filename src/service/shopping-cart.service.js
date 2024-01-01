const connection = require('../app/database')
const { UNKNOW_ERROR } = require('../config/error.config')

class CartService {
  // 查询
  async create(info, ctx) {
    const { user_id, product_id, specification = '' } = info
    const sql = `INSERT INTO shopping_cart(user_id,product_id,specification)VALUES(?,?,?)`
    const [value] = await connection.execute(sql, [
      user_id,
      product_id,
      specification,
    ])
    if (value.affectedRows > 0) {
      return true
    } else {
      ctx.app.emit('error', UNKNOW_ERROR, ctx)
      return false
    }
  }

  async check(id, ctx) {
    const sql = `SELECT sc.id, sc.specification, u.name,p.id as pId, p.title, p.subtitle,p.current_price, p.banner_path FROM shopping_cart as sc LEFT JOIN users as u ON sc.user_id = u.id LEFT JOIN product as p ON sc.product_id = p.id WHERE u.id = ? AND sc.is_delete = ? ORDER BY sc.id DESC`
    const [value] = await connection.execute(sql, [id, 0])
    return value
  }

  async delete(id, ctx) {
    const sql = `UPDATE shopping_cart SET is_delete = ? WHERE id = ?`
    const [value] = await connection.execute(sql, [1, id])
    if (value.affectedRows > 0) {
      return true
    } else {
      ctx.app.emit('error', UNKNOW_ERROR, ctx)
      return false
    }
  }
}

module.exports = new CartService()
