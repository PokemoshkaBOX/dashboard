const Router = require('express')
const router = new Router()
const objectController = require('../controllers/objectController')//импортируем контроллер

router.get('/', objectController.getAll)

module.exports = router
