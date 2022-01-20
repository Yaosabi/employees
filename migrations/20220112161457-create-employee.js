'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      jobtitle: {
        type: Sequelize.STRING
      },
      streetline1:{
        type: Sequelize.STRING
      },
      streetline2:{
        type: Sequelize.STRING
      },
      city:{
        type: Sequelize.STRING
      },
      state:{
        type: Sequelize.STRING
      },
      zip:{
        type: Sequelize.INTEGER
      },
      phonenumber:{
        type: Sequelize.INTEGER
      },
      yearhired:{
        type: Sequelize.INTEGER
      },
      graduated:{
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Employees');
  }
};