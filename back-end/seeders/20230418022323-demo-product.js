"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Products", [
      {
        id: 1,
        name: "Sharp Microwave R-21D0(S)-IN",
        price: 3000000,
        description:
          "Sharp Microwave R-21D0(S)IN -Hitam/Silver, microwave yang memiliki banyak fitur dan keunggulan. Dengan desain menarik, menjadikan microwave ini terlihat lebih bagus dan futuristik.",
        image:
          "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/9/17/f1a3eb75-18c3-48d1-aa5e-2b5186f1f4ac.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        sellerId: 1,
        categoryId: 2,
      },
      {
        id: 2,
        name: "JFR Fashion Dompet Pria ",
        price: 134750,
        description:
          "Menyimpan Barang Berharga Seperti Uang, Kartu Identitas, Debit/Credit Card, Photo, Dll. INCLUDE BOX EXCLUSIVE. SELLER WARRANTY: 2 Weeks and The warranty applies if the goods are defective in production",
        image:
          "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/17/9f602e36-92b1-403c-8d7f-6fa02971e2f3.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        sellerId: 5,
        categoryId: 1,
      },
      {
        id: 3,
        name: "Wardah UV Shield Essential Sunscreen Gel SPF 30 PA +++ 40 ml Sunscreen",
        price: 300000,
        description:
          "Wardah UV Shield Essential Sunscreen Gel , Sunscreen wajah untuk perlindungan aktivitas sehari-hari di luar rumah. Dilengkapi dengan SPF 30 PA +++",
        image:
          "https://images.tokopedia.net/img/cache/900/hDjmkQ/2022/12/27/fb15b20d-4b3e-460e-a0d1-16f5ade9a0b1.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        sellerId: 1,
        categoryId: 5,
      },
      {
        id: 4,
        name: "Whitelab N10-Dose+ Brightening Serum",
        price: 74184,
        description:
          "Diformulasikan dengan kekuatan 3 kandungan utama Niacinamide 10% (Highest Grade), Hyalucomplex-10, dan Marine Collagen menyamarkan noda gelap, hiperpigmentasi, dan bekas jerawat sehingga kulit tampak lebih cerah dan halus.",
        image:
          "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/11/13/315db056-5e0c-4b2a-82ed-5d0afdb05d7b.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        sellerId: 3,
        categoryId: 5,
      },
      {
        id: 5,
        name: "SOMETHINC 5% Niacinamide + Moisture Sabi Beet Serum 20ml",
        price: 89000,
        description:
          "Serum 5% Niacinamide dengan kandungan Sabi Beet yang membantu mencerahkan secara maksimal, memperbaiki tekstur kulit, memperkuat skin barrier, menyamarkan noda hitam, melembabkan, & mengurangi kemerahan.",
        image:
          "https://images.tokopedia.net/img/cache/900/VqbcmM/2021/9/17/f1a3eb75-18c3-48d1-aa5e-2b5186f1f4ac.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        sellerId: 1,
        categoryId: 5,
      },
      {
        id: 6,
        name: "Furniture Lemari 2 Pintu Full Putih simple",
        price: 1199000,
        description:
          "Lemari yang di desain elegan warna putih menggunakan material particle board berkualitas ketebalan 15mm dan kombinasi 12 mm serta laminasi paper white.",
        image:
          "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/2/21/49e6b380-8470-47f5-a9c5-9c1d5e09ed51.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        sellerId: 4,
        categoryId: 2,
      },
      {
        id: 7,
        name: "LG GN-B215SQMT Kulkas 2Pintu",
        price: 3999000,
        description:
          "KULKAS 2 PINTU SMART INVERTER COMPRESSOR 225L/209L",
        image:
          "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/1/31/df133b6e-151d-443f-9516-fba362152b40.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        sellerId: 1,
        categoryId: 2,
      },
      {
        id: 8,
        name: "IKEA LERBERG Rak Serbaguna",
        price: 249000,
        description:
          "IKEA LERBERG Rak Serbaguna Minimalis Bahan Baja 60x148 cm - Abu-abu. Unit rak klasik dan tak lekang waktu dengan ruang untuk barang-barang di semua ketinggian dan ukuran berkat berbagai ukuran dan jarak rak.",
        image:
          "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/8/3/2d6ef289-7e9f-4566-bc9f-1e6181c2e86a.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        sellerId: 2,
        categoryId: 4,
      },
      {
        id: 9,
        name: "IKEA KULLEN Lemari 6 Laci Putih ",
        price: 1699000,
        description:
          "IKEA KULLEN Lemari 6 Laci Putih Minimalis 140x72 cm - Tidak Dirakit. Lemari laci sederhana dengan tampilan bersih yang pas di kamar tidur, atau di mana pun Anda meletakkannya.",
        image:
          "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/8/10/2b7124cf-42b0-491c-ba74-230422e3f101.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        sellerId: 2,
        categoryId: 4,
      },
      {
        id: 10,
        name: "Jacket Pria PUMA FIGC HOME PREMATCH",
        price: 650000,
        description:
          "Brand New With Tag - Fullset. Original Guarantee 100%",
        image:
          "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/7/1750f428-54cf-40a6-8178-18fa32c78623.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        sellerId: 1,
        categoryId: 1,
      },
      {
        id: 11,
        name: "Hoodie Pria NEW BALANCE",
        price: 399000,
        description:
          "Brand New With Tag - Fullset. Original Guarantee 100%",
        image:
          "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/29/4f87a986-a740-4131-b5c6-b41c13498b5b.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        sellerId: 1,
        categoryId: 1,
      },
      {
        id: 12,
        name: "Kaos Pria NIKE M NSW TEE LCHA",
        price: 349000,
        description:
          "Brand New With Tag - Fullset. Original Guarantee 100%",
        image:
          "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/28/1789d8be-6f3f-4f45-b0a7-8885e5c53a80.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        sellerId: 1,
        categoryId: 1,
      },
      {
        id: 13,
        name: "Kaos Pria SKECHERS MEN SPORTS",
        price: 149000,
        description:
          "Brand New With Tag - Fullset. Original Guarantee 100%",
        image:
          "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/26/3a510ed6-4db3-424c-80fe-8e4dc339b5c7.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        sellerId: 1,
        categoryId: 1,
      },
      {
        id: 14,
        name: "Celana Wanita NIKE WMNS SHORT X TRAVIS",
        price: 649000,
        description:
          "Brand New With Tag - Fullset. Original Guarantee 100%",
        image:
          "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/26/9129aa13-36f6-4f06-9d92-be0188cc7554.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        sellerId: 1,
        categoryId: 1,
      },
      {
        id: 15,
        name: "Celana Training Pria NIKE ACG CC WINDSHELL",
        price: 649000,
        description:
          "Brand New With Tag - Fullset. Original Guarantee 100%",
        image:
          "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/4/26/b5fc4ea9-668f-41dd-831f-c6642e3b5ee5.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        sellerId: 1,
        categoryId: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
