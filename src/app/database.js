const mysql = require('mysql2')

const connectionPool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'xl',
  user: 'root',
  password: 'qwerty123',
  connectionLimit: 8,
})

// 尝试与数据库连接
connectionPool.getConnection((err) => {
  if (err) {
    console.log('与数据库交互失败')
  } else {
    console.log('连接数据库成功～')
  }
})

// 将连接池的连接变成promise方式
const connection = connectionPool.promise()

module.exports = connection
