const Router = require('express')
const router = new Router()
const kcpController = require('../controllers/kcpController')//импортируем контроллер

router.get('/', kcpController.getAll)

module.exports = router
