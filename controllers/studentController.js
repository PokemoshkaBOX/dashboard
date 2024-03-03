const {student}  = require('../models/models')
const ApiError = require('../error/ApiError')

class studentController{

    async getAll(req,res){
        const Student = await student.findAll()
        return res.json(Student)
    }
}

module.exports = new studentController()