const mongoose = require("mongoose");
const Student = require("../models/student.model");

const attendance = async (req, res) => {
//   console.log(req.body);
  for (const student of req.body) {
    try {
      const res = await Student.updateOne(
        { rollNo: student.rollNo, class: student.class, date: student.date ,name:student.name },
        { $set: { status: student.status } },
        { upsert: true }
      );

      console.log(res);
    } catch (err) {}
  }
};

module.exports = attendance;
