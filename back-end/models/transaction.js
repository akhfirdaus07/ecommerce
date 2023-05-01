'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Product, {
        foreignKey: "productId",
      });
      // Transaction.belongsTo(models.User, {
      //   foreignKey: "sellerId",
      // });
      Transaction.belongsTo(models.User, {
        foreignKey: "buyerId",
      });
      Transaction.belongsTo(models.Logistic, {
        foreignKey: "logisticId",
      });
    }
  }
  Transaction.init({
    qty: DataTypes.INTEGER,
    totalAmount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};