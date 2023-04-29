"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("UserDetails", [
      {
        id: 1,
        firstName: "First",
        lastName: "Person",
        address:
          "Jl. Jenderal Sudirman No.Kav. 21, RT.10/RW.1, Kuningan, Karet, Kecamatan Setiabudi, Jakarta Selatan, DKI Jakarta 12930",
        birthdate: "1987-04-17",
        gender: "Male",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        firstName: "Second",
        lastName: "Person",
        address:
          "Jl. Jenderal Sudirman No.Kav. 21, RT.10/RW.1, Kuningan, Karet, Kecamatan Setiabudi, Jakarta Selatan, DKI Jakarta 12930",
        birthdate: "1987-04-17",
        gender: "Male",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        firstName: "Third",
        lastName: "Person",
        address:
          "Jl. Jenderal Sudirman No.Kav. 21, RT.10/RW.1, Kuningan, Karet, Kecamatan Setiabudi, Jakarta Selatan, DKI Jakarta 12930",
        birthdate: "1987-04-17",
        gender: "Male",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        firstName: "Fourth",
        lastName: "Person",
        address:
          "Jl. Jenderal Sudirman No.Kav. 21, RT.10/RW.1, Kuningan, Karet, Kecamatan Setiabudi, Jakarta Selatan, DKI Jakarta 12930",
        birthdate: "1987-04-17",
        gender: "Male",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        firstName: "Fifth",
        lastName: "Person",
        address:
          "Jl. Jenderal Sudirman No.Kav. 21, RT.10/RW.1, Kuningan, Karet, Kecamatan Setiabudi, Jakarta Selatan, DKI Jakarta 12930",
        birthdate: "1987-04-17",
        gender: "Male",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("UserDetails", null, {});
  },
};
