'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('buildings', [
      {
        sell_value: 50,
        rent_value: 38,
        position:1
      },
      {
        sell_value: 70,
        rent_value: 42,
        position:2
      },
      {
        sell_value: 90,
        rent_value: 19,
        position:3
      },
      {
        sell_value: 60,
        rent_value: 36,
        position:4
      },
      {
        sell_value: 50,
        rent_value: 15,
        position:5
      },
      {
        sell_value: 60,
        rent_value: 41,
        position:6
      },
      {
        sell_value: 50,
        rent_value: 23,
        position:7
      },
      {
        sell_value: 80,
        rent_value: 36,
        position:8
      },
      {
        sell_value: 90,
        rent_value: 25,
        position:9
      },
      {
        sell_value: 50,
        rent_value: 42,
        position:10
      },
      {
        sell_value: 50,
        rent_value: 33,
        position:11
      },
      {
        sell_value: 70,
        rent_value: 35,
        position:12
      },
      {
        sell_value: 90,
        rent_value: 54,
        position:13
      },
      {
        sell_value: 70,
        rent_value: 23,
        position:14
      },
      {
        sell_value: 60,
        rent_value: 32,
        position:15
      },
      {
        sell_value: 50,
        rent_value: 17,
        position:16
      },
      {
        sell_value: 90,
        rent_value: 53,
        position:17
      },
      {
        sell_value: 60,
        rent_value: 25,
        position:18
      },
      {
        sell_value: 80,
        rent_value: 52,
        position:19
      },
      {
        sell_value: 90,
        rent_value: 17,
        position:20
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('buildings', null, {});
  }
};
