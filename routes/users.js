const router = require('koa-router')()

const db = require('../models/index')
const website = require('./controllers/website.js')
// console.log(db.Company)
router.prefix('/users')
router.post('/',website.addlist)
router.post('/delete',website.deltitem)
router.post('/select',website.select)
router.post('/update',website.update)
router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
