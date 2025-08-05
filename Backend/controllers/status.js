const Student = require("../models/student.model");
const Entry = require("../models/entries.model")
const status = async (req, res) => {
  const course = req.params.course;
  
  try {
    const students = await Entry.find({ class: course }).sort({rollNo:1});
    const distinctDays = await Student.distinct("date", { class: course });
    const totalDays = distinctDays.length;

    const attendanceData = await Promise.all(
      students.map(async (student) => {
        const presentDays = await Student.countDocuments({
          rollNo: student.rollNo,
          class: course,
          status: true,
        })
        const attendancePercentage =
          totalDays === 0 ? 0 : (presentDays / totalDays) * 100;
        return {
          name: student.name,
          rollNo: student.rollNo,
          percent: attendancePercentage.toFixed(2),
        };
      })
    );
    // console.log(attendanceData);
    res.status(200).json({ totalDays, attendanceData });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = status;

