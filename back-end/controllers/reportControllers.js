const db = require("../models");
const transaction = db.Transaction;
const user = db.User;
const { Op } = require("sequelize");

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

      //   Date filter, default to 7 days ago
      const startDate = new Date(new Date().setDate(new Date().getDate() - 7)); //default to 7 days ago;
      const endDate = new Date();

      //   const {startDate, endDate}=req.body;

      const transactionData = await transaction.findAll({
        where: {
          sellerId: userData.id,
          createdAt: {
            [Op.gte]: startDate,
            [Op.lte]: endDate,
          },
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
