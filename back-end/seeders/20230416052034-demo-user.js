"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        username: "FirstPerson",
        email: "firstperson@gmail.com",
        phone: "0811-1111-1111",
        storeName: "First Store",
        password: "Password1.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "SecondPerson",
        email: "secondperson@gmail.com",
        phone: "0822-2222-2222",
        storeName: "Second Store",
        password: "Password1.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "ThirdPerson",
        email: "thirdperson@gmail.com",
        phone: "0833-3333-3333",
        storeName: "Third Store",
        password: "Password1.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "FourthPerson",
        email: "fourthperson@gmail.com",
        phone: "0844-4444-4444",
        storeName: "Fourth Store",
        password: "Password1.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "FifthPerson",
        email: "fifthperson@gmail.com",
        phone: "0855-5555-5555",
        storeName: "Fifth Store",
        password: "Password1.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "SixthPerson",
        email: "sixthperson@gmail.com",
        phone: "0866-6666-6666",
        storeName: "Sixth Store",
        password: "Password1.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "SeventhPerson",
        email: "seventhperson@gmail.com",
        phone: "0812-7777-7777",
        storeName: "Seventh Store",
        password: "Password1.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "EighthPerson",
        email: "eighthperson@gmail.com",
        phone: "0812-8888-8888",
        storeName: "Eighth Store",
        password: "Password1.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "NinthPerson",
        email: "ninthperson@gmail.com",
        phone: "0812-9999-9999",
        storeName: "Ninth Store",
        password: "Password1.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "TenthPerson",
        email: "tenthperson@gmail.com",
        phone: "0812-1010-1010",
        storeName: "Tenth Store",
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
