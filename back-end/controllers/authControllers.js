const bcrypt = require("bcrypt");
const db=require("../models");
const user = db.User;

module.exports = {
  register: async (req, res) => {
    try {
      const errorMessage = "Lengkapi Data";
      const { username, email, phone, storeName, password } = req.body;
      if (!username || !email || !phone || !storeName || !password)
        throw errorMessage;

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
      res.status(400).send(err);
    }
  },
};
