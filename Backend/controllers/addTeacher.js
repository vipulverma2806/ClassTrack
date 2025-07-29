const Teacher = require("../models/Teacher.model");
const bcrypt = require("bcryptjs");
const create = async () => {
  const email = "vipul@gmail.com";
  const password = "123456";
  const hashed = await bcrypt.hash(password, 10);

  console.log(hashed);
  Teacher.create({ email: email, password: hashed })
    .then((res) => console.log(res))
    .catch((err) => console.log(err.errmsg));
};

module.exports = create;
