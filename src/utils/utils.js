const { SERVER_PORT, SERVER_HOST } = require('../config/server.config')

const getFullUrl = (url) => {
  const urls = url
    .split(',')
    .map((item) => `http://${SERVER_HOST}:${SERVER_PORT}/${item}`)
  return urls.join(',')
}

module.exports = {
  getFullUrl,
}
