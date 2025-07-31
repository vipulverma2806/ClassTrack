const DummyStudent = require("../config/DummyStudents")

const getStudents = async(req,res)=>{
 res.status(200).json(DummyStudent)   
}

module.exports = getStudents;