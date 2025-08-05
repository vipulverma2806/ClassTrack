const express = require("express");
const router = express.Router();
const getStudents = require("../controllers/getStudents");
const authMiddleware = require("../middleware/auth.middleware");
const attendance = require("../controllers/attendance");
const status = require("../controllers/status")
const addStudents = require("../controllers/addStudents")

router.get("/getStudents",getStudents);
router.post("/attendance",authMiddleware, attendance);
router.post("/addstudents",authMiddleware, addStudents);
router.get("/status/:course",authMiddleware, status);

module.exports = router;

//  authMiddleware, 