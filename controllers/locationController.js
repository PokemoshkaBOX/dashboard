const {location}  = require('../model/models')
const ApiError = require('../error/ApiError')

class locationController{
    //функция создания

    async getAll(req,res){
        const Location = await location.findAll()
        return res.json(Location)
    }
}

module.exports = new locationController()
