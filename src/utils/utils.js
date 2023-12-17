const { SERVER_PORT, SERVER_HOST } = require('../config/server.config')

const getFullUrl = (url) => {
  return `http://${SERVER_HOST}:${SERVER_PORT}/${url}`
}

module.exports = {
  getFullUrl,
}
