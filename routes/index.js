const Router = require('express')
const router = new Router()
const kcpRouter = require('./kcpRouter')
const statementRouter = require('./statementRouter')
const studentsRouter = require('./studentRouter')
const userRouter = require('./userRouter')
const creditedRouter = require('./creditedRouter')
const instituteRouter = require('./instituteRouter')
const locationRouter = require('./locationRouter')
const objectRouter = require('./objectRouter')
const scoresRouter = require('./scoresRouter')
const specializationRouter = require('./specializationRouter')

router.use('/kcp', kcpRouter)
router.use('/user', userRouter)
router.use('/statement', statementRouter)
router.use('/student', studentsRouter)
router.use('/credited', creditedRouter)
router.use('/institute', instituteRouter)
router.use('/location', locationRouter)
router.use('/object', objectRouter)
router.use('/scores', scoresRouter)
router.use('/specialization', specializationRouter)

module.exports = router