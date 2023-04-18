"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Logistics", [
      {
        id: 1,
        name:"JNE",
        price:20000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name:"JNE",
        price:25000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name:"Anteraja",
        price:30000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Logistics", null, {});
  },
};
