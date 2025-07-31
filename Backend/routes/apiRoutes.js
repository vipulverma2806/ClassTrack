const express = require("express");
const router = express.Router();
const getStudents = require("../controllers/getStudents");
const authMiddleware = require("../middleware/auth.middleware");
const attendance = require("../controllers/attendance");
router.get("/getStudents", authMiddleware, getStudents);
router.post("/attendance", attendance);

module.exports = router;
