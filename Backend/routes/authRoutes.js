const express = require("express");
const login = require("../controllers/login");
const router = express.Router();

router.post("/login", login);
router.post("/protect", protected);
module.exports = router;