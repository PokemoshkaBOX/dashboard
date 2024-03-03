require('dotenv').config()// испорт файла .env

const express = require('express') //импортируем express

const sequelize = require('./db.js')//импортируем нашу модель дб
const models = require('./model/models')
const app = express()
const cors = require('cors')
const router = require('./routes/indexRouter')
const errorHandler = require("./middleware/ErrorHandlingMiddleware")

const PORT = process.env.PORT || 5000 //порт на котором будет запускаться сервер
// если в папке .env его нет то сревер запустится на порту 5000

//
app.use(cors({origin: true, credentials: true}))
app.use(express.json())
app.use('/api', router)

//Замыкающий middleware
app.use(errorHandler)

const start = async () => { // все операции с БД асинхронные
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))//если сервер успешно
    }
    catch(e){
        console.log(e)
    }
}

start()
// запустится мы увидим в консоли эту надпись
