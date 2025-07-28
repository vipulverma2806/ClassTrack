const express = require("express");
const app = express();
const connectDB = require("./dbConfig/db");
const create = require("./dbConfig/addTeacher");
require("dotenv").config();
const PORT = process.env.PORT;
const Teacher = require("./dbConfig/Teacher.model");
connectDB();

create();
app.listen(PORT, (err) => {
  if (err) {
    return console.log(`Error occured`);
  }
  console.log(`server is running on ${PORT}`);
});
