"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("UserDetails", [
      {
        firstName: "First",
        lastName: "Person",
        address:
          "Jl. Jenderal Sudirman No.Kav. 21, RT.10/RW.1, Kuningan, Karet, Kecamatan Setiabudi, Jakarta Selatan, DKI Jakarta 12930",
        birthdate: "1987-04-17",
        gender: "Male",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        firstName: "Second",
        lastName: "Person",
        address:
          "Jl. Jenderal Sudirman No.Kav. 21, RT.10/RW.1, Kuningan, Karet, Kecamatan Setiabudi, Jakarta Selatan, DKI Jakarta 12930",
        birthdate: "1987-04-17",
        gender: "Male",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        firstName: "Third",
        lastName: "Person",
        address:
          "Jl. Jenderal Sudirman No.Kav. 21, RT.10/RW.1, Kuningan, Karet, Kecamatan Setiabudi, Jakarta Selatan, DKI Jakarta 12930",
        birthdate: "1987-04-17",
        gender: "Male",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
      },
      {
        firstName: "Fourth",
        lastName: "Person",
        address:
          "Jl. Jenderal Sudirman No.Kav. 21, RT.10/RW.1, Kuningan, Karet, Kecamatan Setiabudi, Jakarta Selatan, DKI Jakarta 12930",
        birthdate: "1987-04-17",
        gender: "Male",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
      },
      {
        firstName: "Fifth",
        lastName: "Person",
        address:
          "Jl. Jenderal Sudirman No.Kav. 21, RT.10/RW.1, Kuningan, Karet, Kecamatan Setiabudi, Jakarta Selatan, DKI Jakarta 12930",
        birthdate: "1987-04-17",
        gender: "Male",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("UserDetails", null, {});
  },
};
