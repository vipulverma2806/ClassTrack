const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
  name: String,
  rollNo: Number,
  class: String,
  status: Boolean,
  date: Date,
});

module.exports = mongoose.model("Student", studentSchema);
