const Entry = require("../models/entries.model");
const dummyData = require("../config/DummyStudents");
const addStudents = async (req, res) => {
  try {
    const data = await Entry.create(req.body);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
  res.status(200).json("added");
};

module.exports = addStudents;
