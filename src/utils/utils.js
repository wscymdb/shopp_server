const { SERVER_PORT, SERVER_HOST } = require('../config/server.config')

const getFullUrl = (url) => {
  const reg = /http:\/\/(.*):(\w+)\//
  const urls = url.split(',').map((item) => {
    if (reg.test(item)) {
      return item
    }

    return `http://${SERVER_HOST}:${SERVER_PORT}/${item}`
  })
  return urls.join(',')
}

module.exports = {
  getFullUrl,
}
