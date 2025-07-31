const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  const decoded = jwt.verify(token, process.env.JWT_KEY);
  console.log(decoded);
};

module.exports = authMiddleware;
