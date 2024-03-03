const ApiError = require('../error/ApiError')

// функция и есть middleware
module.exports = function (err, req, res, next) {// параметры ошибка, запрос, ответ, и функция
    // next вызвав которую мы передадим управление следующему в цепочке midleware
    if (err instanceof ApiError){ //если класс ошибки ApiError то тогда на клиент возвращаем ответ со
        // статус кодом который будем получать из ошибки и сообщением которое мы прописали для этой ошибки
        return res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message:'Непридвиденная ошибка'    })
}