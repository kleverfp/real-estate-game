'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('buildings', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      sell_value:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      rent_value:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      position:{
        type:Sequelize.INTEGER,
        allowNull:false
      }
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('buildings');
  }
};
