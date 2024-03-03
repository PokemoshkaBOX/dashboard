const {kcp}  = require('../model/models')
const ApiError = require('../error/ApiError')

class kcpController{
    //функция создания
    async getAll(req,res){
        const Kcp = await kcp.findAll()
        return res.json(Kcp)
    }
}

module.exports = new kcpController()
