const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
const user = db.User;

module.exports = {
  register: async (req, res) => {
    try {
      const { username, email, phone, storeName, password } = req.body;
      if (!username || !email || !phone || !storeName || !password)
        throw "Data is Incomplete";

      const salt = await bcrypt.genSalt(10);
      const hashPass = await bcrypt.hash(password, salt);
      const result = await user.create({
        username,
        email,
        phone,
        storeName,
        password: hashPass,
      });

      res.status(200).send({
        status: true,
        data: result,
        message: "Register Success",
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw "Invalid Email and/or Password";

      const userExist = await user.findOne({
        where: {
          email,
        },
      });
      if (!userExist)
        throw {
          status: false,
          message: "User Not Found",
        };

      const isValid = await bcrypt.compare(password, userExist.password);
      if (!isValid)
        throw {
          status: false,
          message: "Wrong Password",
        };

      const payload = { id: userExist.id };
      const token = jwt.sign(payload, "JWT", {
        expiresIn: "1h",
      });
      res.status(200).send({
        status: true,
        message: "Login Success",
        data: userExist,
        token,
      });
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
