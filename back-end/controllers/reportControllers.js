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
      //   const startDate = new Date(new Date().setDate(new Date().getDate() - 7)); //default to 7 days ago;

      //   const startDate= "2023-01-01"
      //   const endDate = new Date();

      const { startDate, endDate } = req.body;

      const transactionData = await transaction.findAll({
        where: {
          sellerId: userData.id,
          createdAt: {
            // [Op.between]: [startDate, endDate]
            [Op.gte]: startDate,
            [Op.lte]: endDate,
          },
        },
      });

      const getReport = (start, end) => {
        let totalIncome;
        for (
          var arr = [], dt = new Date(start);
          dt <= new Date(end);
          dt.setDate(dt.getDate() + 1)
        ) {
          totalIncome = 0;
          transactionData.forEach((transaction) => {
            if (
              dt.toDateString() ==
              new Date(transaction.createdAt).toDateString()
            ) {
              totalIncome += transaction.totalAmount;
            }
          });
          arr.push({ date: new Date(dt), totalIncome });
        }
        return arr;
      };

      const incomeByDay = getReport(new Date(startDate), new Date(endDate));
      //   incomeByDay.map((v) => v.toISOString().slice(0, 10)).join("");

      res.status(200).send({
        status: true,
        userData,
        incomeByDay,
        transactionData,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
};
