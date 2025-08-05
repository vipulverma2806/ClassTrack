const mongoose = require("mongoose");
const entrySchema = mongoose.Schema({
  name: String,
  rollNo: {type: Number, unique:true},
  class: String,
});

module.exports = mongoose.model("Entry", entrySchema);
