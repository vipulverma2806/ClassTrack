const Entry = require("../models/entries.model");

const addStudents = async (req, res) => {
    const {rollNo} = req.body;

  try {
    const found = await Entry.findOne({rollNo})
    if(found) return res.status(403).json("Roll no. already exist")
    const data = await Entry.create(req.body);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
  res.status(200).json("added");
};

module.exports = addStudents;
