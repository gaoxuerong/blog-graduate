const db = require('./db')

module.exports = {
  db,
  SALT_WORK_FACTOR: 10, // 生成salt的迭代次数
  TOKEN_SECRET: 'reactblog',
  TOKEN_EXPIRESIN: '720h' // token 有效期
}
