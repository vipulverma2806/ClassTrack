const mongoose = require("mongoose");
const Student = require("../models/student.model");

const attendance = async (req, res) => {
  //   console.log(req.body);
  const results = [];
  let hasError;
  for (const student of req.body) {
    try {
      const result = await Student.updateOne(
        {
          rollNo: student.rollNo,
          class: student.class,
          date: student.date,
          name: student.name,
        },
        { $set: { status: student.status } },
        { upsert: true }
      );
      results.push(result);
      console.log(res);
    } catch (err) {
      hasError = true;
      results.push(err);
      console.log(err);
    }
  }
 if(hasError) return res.status(500).json("error");
 return res.status(200).json("Success");
 
};

module.exports = attendance;
