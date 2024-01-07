const connection = require('../app/database')
const { UNKNOW_ERROR } = require('../config/error.config')

class OrderService {
  // 查询
  async create(info, ctx) {
    const { user_id, product_id, address_id, count = 1 } = info
    console.log(info)
    const sql = `INSERT INTO order_detail(user_id,product_id,address_id,count)VALUES(?,?,?,?)`
    const [value] = await connection.execute(sql, [
      user_id,
      product_id,
      address_id,
      count,
    ])
    if (value.affectedRows > 0) {
      return true
    } else {
      ctx.app.emit('error', UNKNOW_ERROR, ctx)
      return false
    }
  }

  async check(id, ctx) {
    console.log(id)
    const sql = `SELECT od.id, od.status, p.id as pId, p.title, p.subtitle, p.current_price FROM order_detail as od LEFT JOIN product as p ON od.product_id = p.id WHERE od.is_delete = ? AND od.user_id = ? ORDER BY od.id DESC`
    const [value] = await connection.execute(sql, [0, id])
    return value
  }

  async checkType({ id, status }, ctx) {
    let sql = `SELECT od.id, od.status, p.id as pId, p.title, p.subtitle, p.current_price,p.banner_path FROM order_detail as od LEFT JOIN product as p ON od.product_id = p.id WHERE od.is_delete = ? AND p.is_delete = ? AND od.user_id = ? AND status = ? ORDER BY od.id DESC`
    if (status === '2') {
      sql = `SELECT od.id, od.status, p.id as pId, p.title, p.subtitle, p.current_price,p.banner_path FROM order_detail as od LEFT JOIN product as p ON od.product_id = p.id WHERE od.is_delete = ? AND p.is_delete = ? AND od.user_id = ?  ORDER BY od.id DESC`
      const [value] = await connection.execute(sql, [0, 0, id])
      return value
    } else {
      const [value] = await connection.execute(sql, [0, 0, id, status])
      return value
    }
  }

  async delete(id, ctx) {
    const sql = `UPDATE order_detail SET is_delete = ? WHERE id = ?`
    const [value] = await connection.execute(sql, [1, id])
    if (value.affectedRows > 0) {
      return true
    } else {
      ctx.app.emit('error', UNKNOW_ERROR, ctx)
      return false
    }
  }
}

module.exports = new OrderService()
