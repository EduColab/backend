'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('subjects', { 
      id: { 
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      programId : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'programs',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      courses_related: {
        type: Sequelize.STRING
      },
      programs_related: {
        type: Sequelize.STRING
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('subjects');
  }
};
