"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Carts", [
      {
        id: 1,
        qty: 1,
        totalAmount: 134750,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        productId: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Carts", null, {});
  },
};
