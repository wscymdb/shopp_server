const connection = require('../app/database')
const { UNKNOW_ERROR } = require('../config/error.config')

class ProductService {
  // 查询
  async check(payload) {
    const { page, row, title } = payload
    let sql = `SELECT product.id, product.title, product.subtitle, product.current_price, product.previous_price, product.banner_path, product.detail_path, product.freight, product.createAt, product.updateAt, product.label_id, labels.name FROM product LEFT JOIN labels ON product.label_id = labels.id WHERE product.is_delete = ? ORDER BY product.id DESC LIMIT ? OFFSET ? `

    if (title) {
      sql = `SELECT product.id, product.title, product.subtitle, product.current_price, product.previous_price, product.banner_path, product.detail_path, product.freight, product.createAt, product.updateAt, product.label_id, labels.name FROM product LEFT JOIN labels ON product.label_id = labels.id WHERE product.is_delete = ? AND product.title LIKE ? ORDER BY product.id DESC LIMIT ? OFFSET ? `

      const [value] = await connection.execute(sql, [
        0,
        `%${title}%`,
        String(row),
        String(page),
      ])
      return value
    } else {
      const [value] = await connection.execute(sql, [
        0,
        String(row),
        String(page),
      ])
      return value
    }
    // const sql = `SELECT * FROM product WHERE is_delete = ? ORDER BY id DESC LIMIT ? OFFSET ?`
  }
  // 根据id查询商品
  async checkById(id) {
    const sql = `SELECT * FROM product WHERE is_delete = ? AND id = ?`
    const [value] = await connection.execute(sql, [0, id])
    return value
  }
  // 根据标签查询商品
  async checkByLabel(label_id) {
    const sql = `SELECT * FROM product WHERE is_delete = ? AND label_id = ?`
    const [value] = await connection.execute(sql, [0, label_id])
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
        label_id,
      } = info
      console.log(info)
      const sql = `INSERT INTO product(title,subtitle,freight,current_price,previous_price,banner_path,detail_path,label_id ) VALUES(?,?,?,?,?,?,?,?)`
      const [value] = await connection.execute(sql, [
        title,
        subtitle,
        freight,
        current_price,
        previous_price,
        banner_path,
        detail_path,
        label_id,
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
        label_id,
        id,
      } = info
      console.log(label_id)
      const sql = `UPDATE  product SET title=?,subtitle=?, freight=?, current_price=?, previous_price=?,banner_path = ?, detail_path = ?, label_id=? WHERE id=?`
      const [value] = await connection.execute(sql, [
        title,
        subtitle,
        freight,
        current_price,
        previous_price,
        banner_path,
        detail_path,
        label_id,
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
