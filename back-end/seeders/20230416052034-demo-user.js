"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        id: 1,
        username: "FirstPerson",
        email: "firstperson@gmail.com",
        phone: "0811-1111-1111",
        storeName: "First Store",
        password: "Password1.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        username: "SecondPerson",
        email: "secondperson@gmail.com",
        phone: "0822-2222-2222",
        storeName: "Second Store",
        password: "Password1.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        username: "ThirdPerson",
        email: "thirdperson@gmail.com",
        phone: "0833-3333-3333",
        storeName: "Third Store",
        password: "Password1.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        username: "FourthPerson",
        email: "fourthperson@gmail.com",
        phone: "0844-4444-4444",
        storeName: "Fourth Store",
        password: "Password1.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        username: "FifthPerson",
        email: "fifthperson@gmail.com",
        phone: "0855-5555-5555",
        storeName: "Fifth Store",
        password: "Password1.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
