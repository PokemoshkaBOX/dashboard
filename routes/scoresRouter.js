const Router = require('express')
const router = new Router()
const scoresController = require('../controllers/scoresController')//импортируем контроллер

router.get('/', scoresController.getAll)

module.exports = router
