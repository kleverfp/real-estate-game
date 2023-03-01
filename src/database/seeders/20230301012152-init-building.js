'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('buildings', [
      {
        sell_value: 50,
        rent_value: 3,
        position:1
      },
      {
        sell_value: 70,
        rent_value: 4,
        position:2
      },
      {
        sell_value: 90,
        rent_value: 5,
        position:3
      },
      {
        sell_value: 60,
        rent_value: 3,
        position:4
      },
      {
        sell_value: 50,
        rent_value: 3,
        position:5
      },
      {
        sell_value: 60,
        rent_value: 4,
        position:6
      },
      {
        sell_value: 50,
        rent_value: 3,
        position:7
      },
      {
        sell_value: 80,
        rent_value: 6,
        position:8
      },
      {
        sell_value: 90,
        rent_value: 5,
        position:9
      },
      {
        sell_value: 50,
        rent_value: 4,
        position:10
      },
      {
        sell_value: 50,
        rent_value: 3,
        position:11
      },
      {
        sell_value: 70,
        rent_value: 5,
        position:12
      },
      {
        sell_value: 90,
        rent_value: 4,
        position:13
      },
      {
        sell_value: 70,
        rent_value: 3,
        position:14
      },
      {
        sell_value: 60,
        rent_value: 2,
        position:15
      },
      {
        sell_value: 50,
        rent_value: 3,
        position:16
      },
      {
        sell_value: 90,
        rent_value: 5,
        position:17
      },
      {
        sell_value: 60,
        rent_value: 2,
        position:18
      },
      {
        sell_value: 80,
        rent_value: 5,
        position:19
      },
      {
        sell_value: 90,
        rent_value: 7,
        position:20
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('buildings', null, {});
  }
};
