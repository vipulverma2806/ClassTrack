const jwt = require("jsonwebtoken");

const protect = (req, res) => {
    res.status(202).json("Authorised")
};
module.exports = protect;
