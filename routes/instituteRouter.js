const Router = require('express')
const router = new Router()
const instituteController = require('../controllers/instituteController')//импортируем контроллер

router.get('/', instituteController.getAll)


module.exports = router
