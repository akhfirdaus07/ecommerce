"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const bcrypt = require("bcrypt");
    const password="Password1."
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);

    return queryInterface.bulkInsert("Users", [
      {
        id: 1,
        username: "FirstPerson",
        email: "firstperson@gmail.com",
        phone: "0811-1111-1111",
        storeName: "First Store",
        password: hashPass,
        createdAt: new Date(),
        updatedAt: new Date(),
        detailId: 1,
      },
      {
        id: 2,
        username: "SecondPerson",
        email: "secondperson@gmail.com",
        phone: "0822-2222-2222",
        storeName: "Second Store",
        password: hashPass,
        createdAt: new Date(),
        updatedAt: new Date(),
        detailId: 2,
      },
      {
        id: 3,
        username: "ThirdPerson",
        email: "thirdperson@gmail.com",
        phone: "0833-3333-3333",
        storeName: "Third Store",
        password: hashPass,
        createdAt: new Date(),
        updatedAt: new Date(),
        detailId: 3,
      },
      {
        id: 4,
        username: "FourthPerson",
        email: "fourthperson@gmail.com",
        phone: "0844-4444-4444",
        storeName: "Fourth Store",
        password: hashPass,
        createdAt: new Date(),
        updatedAt: new Date(),
        detailId: 4,
      },
      {
        id: 5,
        username: "FifthPerson",
        email: "fifthperson@gmail.com",
        phone: "0855-5555-5555",
        storeName: "Fifth Store",
        password: hashPass,
        createdAt: new Date(),
        updatedAt: new Date(),
        detailId: 5,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
