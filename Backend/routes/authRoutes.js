const express = require("express");
const login = require("../controllers/login");
const protect = require("../controllers/protect");
const logout = require("../controllers/logout");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/login", login);
router.get("/protect", authMiddleware, protect);
router.delete("/logout", logout);
module.exports = router;
