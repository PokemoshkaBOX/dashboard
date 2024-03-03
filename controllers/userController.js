const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {user} = require('../model/models')
require('dotenv').config()

const generateJwt = (id, email, role) => {
    return jwt.sign(
            {id: id, email, role}, //данные пользователя
            process.env.SECRET_KEY, //секретный ключ, выносим в файл .env - SECRET_KEY=random_key
            {expiresIn: '24h'} //сколько будет дейтвовать токен
        )
}

class UserController{
    async registration(req, res, next){
        const {email, password, role} = req.body
        if(!email || !password){
            return next(ApiError.badRequest('Некорректный email или пароль'))//Если емаил и пароль пустые возвращаем ошибку на клиент
        }
        const candidate = await user.findOne({where: {email}})
        if(candidate){//Проверка на существование пользователя с таким емаилом
            return next(ApiError. badRequest('Пользователь с таким email уже существует'))//Возвращаем ошибку
        }
        const hashPassword = await bcrypt.hash(password, 5)//хэшируем пароль. 5 - сколько раз мы будем хэшировать
        const User = await user.create({email, role, password:hashPassword})//создаём пользователя, передаём в него роль емаил и пароль
        const token = generateJwt(User.id, User.email, User.role)//генерация токена
        return res.json({token})//возвращаем токен
    }

    async login(req, res,next){
        const {email, password} = req.body // получаем емаил и пароль из тела запроса
        const User = await user.findOne({where: {email}})
        if (!User) {//убеждаемся что пользователь с таким емаилом в базе существует
            return next(ApiError.internal('Пользователь с таким именем не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, User.password)//сравниваем зашифрованый пароль в бд и который ввёл пользователь
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))//если пароль не совпадают
        }
        const token = generateJwt(User.id, User.email, User.role)//генерируем токен
        return res.json({token})//возвращаем на клиент
    }

    async check(req,res){
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()
