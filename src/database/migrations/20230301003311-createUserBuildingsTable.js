'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user_buildings', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      user_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{model:'users',key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      building_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{model:'buildings',key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      }
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user_buildings');
  }
};
