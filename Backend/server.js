const express = require("express");
const app = express();
const connectDB = require("./config/db");
const create = require("./controllers/addTeacher");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();
const PORT = process.env.PORT;
const Teacher = require("./models/Teacher.model");
const apiRoutes = require("./routes/apiRoutes");
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);

connectDB();

// create(); to addteacher

app.listen(PORT, (err) => {
  if (err) {
    return console.log(`Error occured`);
  }
  console.log(`server is running on ${PORT}`);
});
