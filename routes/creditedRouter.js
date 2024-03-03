const Router = require('express')
const router = new Router()
const creditedController = require('../controllers/creditedController')//импортируем контроллер

router.get('/', creditedController.getAll)

module.exports = router
