const mongoose = require("mongoose")
const studentSchema = mongoose.Schema({
    name:String,
    status:Boolean,

})

module.exports = mongoose.model("Student",studentSchema)