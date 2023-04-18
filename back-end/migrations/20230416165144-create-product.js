"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      // categoryId: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: {
      //       tableName: "Categories",
      //       schema: "",
      //     },
      //     key: "id",
      //   },
      //   allowNull: false,
      // },
      // sellerId: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: {
      //       tableName: "Users",
      //       schema: "",
      //     },
      //     key: "id",
      //   },
      //   allowNull: false,
      // },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
