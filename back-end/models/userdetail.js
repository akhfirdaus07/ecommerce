"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here`
      UserDetail.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  UserDetail.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      address: DataTypes.STRING,
      birthdate: DataTypes.DATEONLY,
      gender: DataTypes.ENUM("Male", "Female"),
      // userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserDetail",
    }
  );
  return UserDetail;
};
