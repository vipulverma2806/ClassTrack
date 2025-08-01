const express = require("express");
const login = require("../controllers/login");
const protect = require("../controllers/protect");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/login", login);
router.get("/protect", authMiddleware, protect);
module.exports = router;
