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
      },
      {
        firstName: "Sixth",
        lastName: "Person",
        address:
          "Jl. Jenderal Sudirman No.Kav. 21, RT.10/RW.1, Kuningan, Karet, Kecamatan Setiabudi, Jakarta Selatan, DKI Jakarta 12930",
        birthdate: "1987-04-17",
        gender: "Female",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Seventh",
        lastName: "Person",
        address:
          "Jl. Jenderal Sudirman No.Kav. 21, RT.10/RW.1, Kuningan, Karet, Kecamatan Setiabudi, Jakarta Selatan, DKI Jakarta 12930",
        birthdate: "1987-04-17",
        gender: "Female",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Eighth",
        lastName: "Person",
        address:
          "Jl. Jenderal Sudirman No.Kav. 21, RT.10/RW.1, Kuningan, Karet, Kecamatan Setiabudi, Jakarta Selatan, DKI Jakarta 12930",
        birthdate: "1987-04-17",
        gender: "Female",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Ninth",
        lastName: "Person",
        address:
          "Jl. Jenderal Sudirman No.Kav. 21, RT.10/RW.1, Kuningan, Karet, Kecamatan Setiabudi, Jakarta Selatan, DKI Jakarta 12930",
        birthdate: "1987-04-17",
        gender: "Female",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Tenth",
        lastName: "Person",
        address:
          "Jl. Jenderal Sudirman No.Kav. 21, RT.10/RW.1, Kuningan, Karet, Kecamatan Setiabudi, Jakarta Selatan, DKI Jakarta 12930",
        birthdate: "1987-04-17",
        gender: "Female",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("UserDetails", null, {});
  },
};
