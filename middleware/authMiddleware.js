const jwt = require('jsonwebtoken')

module.exports = function(req, res, next){
    if (req.method === "OPTIONS"){//если метод равен  options то переходим к следующему middlware
        next()
    }
    try{
        const token = req.headers.authorization.split(' ')[1]//получаем токен и вырезаем из него среднюю часть
        if(!token){
            return res.status(401).json({message: "Пользователь не авторизован"})
        }
        req.user = jwt.verify(token, process.env.SECRET_KEY)//проверка токена на валидность
        next()
    }catch (e){
        res.status(401).json({message: "Пользователь не авторизован"})
    }
}