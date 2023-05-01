const db = require("../models");
const transaction = db.Transaction;
const user = db.User;

module.exports = {
  income: async (req, res) => {
    try {
      const username = "FirstPerson";
      //   const username = localStorage.getItem("username");

      const userData = await user.findOne({
        where: {
          username,
        },
      });

      const transactionData = await transaction.findAll({
        where: {
          sellerId: userData.id,
        },
      });

      res.status(200).send({
        status: true,
        userData,
        transactionData,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
};
