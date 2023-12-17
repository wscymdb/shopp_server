const connection = require('../app/database')
const { UNKNOW_ERROR } = require('../config/error.config')

class ProductService {
  // 查询
  async check(payload) {
    const { page, row } = payload
    const sql = `SELECT * FROM product WHERE is_delete = ? ORDER BY id DESC LIMIT ? OFFSET ?`
    const [value] = await connection.execute(sql, [
      0,
      String(row),
      String(page),
    ])
    return value
  }
  // 根据id查询商品
  async checkById(id) {
    const sql = `SELECT * FROM product WHERE is_delete = ? AND id = ?`
    const [value] = await connection.execute(sql, [0, id])
    return value
  }
  async checkTotal() {
    const sql = `SELECT COUNT(id) as total FROM product WHERE is_delete = ? `
    const [value] = await connection.execute(sql, [0])
    return value
  }

  // 新增
  async create(info, ctx) {
    try {
      const {
        title,
        subtitle,
        freight,
        current_price,
        previous_price,
        banner_path,
        detail_path,
      } = info
      const sql = `INSERT INTO product(title,subtitle,freight,current_price,previous_price,banner_path,detail_path) VALUES(?,?,?,?,?,?,?)`
      const [value] = await connection.execute(sql, [
        title,
        subtitle,
        freight,
        current_price,
        previous_price,
        banner_path,
        detail_path,
      ])
      if (value.affectedRows > 0) {
        return true
      } else {
        ctx.app.emit('error', UNKNOW_ERROR, ctx)
        return false
      }
    } catch (error) {
      console.log(error, 'ProductService')
      ctx.app.emit('error', UNKNOW_ERROR, ctx)
    }
  }
  // 修改
  async update(info, ctx) {
    try {
      const {
        title,
        subtitle,
        freight,
        current_price,
        previous_price,
        banner_path,
        detail_path,
        id,
      } = info
      const sql = `UPDATE  product SET title=?,subtitle=?, freight=?, current_price=?, previous_price=?,banner_path = ?, detail_path = ? WHERE id=?`
      const [value] = await connection.execute(sql, [
        title,
        subtitle,
        freight,
        current_price,
        previous_price,
        banner_path,
        detail_path,
        id,
      ])
      if (value.affectedRows > 0) {
        return true
      } else {
        ctx.app.emit('error', UNKNOW_ERROR, ctx)
        return false
      }
    } catch (error) {
      console.log(error, 'ProductService')
      ctx.app.emit('error', UNKNOW_ERROR, ctx)
    }
  }
  // 删除
  async delete(id) {
    try {
      const sql = `UPDATE  product SET is_delete = ? WHERE id=?`
      const [value] = await connection.execute(sql, [1, id])
      if (value.affectedRows > 0) {
        return true
      } else {
        ctx.app.emit('error', UNKNOW_ERROR, ctx)
        return false
      }
    } catch (error) {
      console.log(error, 'ProductService')
      ctx.app.emit('error', UNKNOW_ERROR, ctx)
    }
  }
}

module.exports = new ProductService()
