const Teacher = require("../models/Teacher.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  
  const { email, password } = req.body;

  try {
    const found = await Teacher.findOne({ email });
    // console.log(found);
    if (!found) return res.status(404).json("Teacher not found");
    const compare = await bcrypt.compare(password, found.password);
    if (!compare) return res.status(401).json("Invalid credentials");
    const token = jwt.sign({ email }, `${process.env.JWT_KEY}`, {
      expiresIn: "1d",
    });
    res.cookie("token", token);
    res.status(200).json("Login Success");
  } catch (err) {
    console.log(err);
  }
};

module.exports = login;
