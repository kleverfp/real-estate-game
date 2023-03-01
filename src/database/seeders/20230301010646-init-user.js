'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        behavior: 'impulsive',
        balance: 300
      },
      {
        behavior: 'demanding',
        balance: 300
      },
      {
        behavior: 'cautious',
        balance: 300
      },
      {
        behavior: 'random',
        balance: 300
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
