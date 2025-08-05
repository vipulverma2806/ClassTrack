const DummyStudent = require("../config/DummyStudents");
const Entry = require("../models/entries.model");
const getStudents = async (req, res) => {
  try {
    const found = await Entry.find();
    // console.log(found)
    res.status(200).json(found);
  } catch (err) {
    console.log(err);
  }
};

module.exports = getStudents;
