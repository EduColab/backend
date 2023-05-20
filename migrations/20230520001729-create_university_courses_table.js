'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('university_courses', { 
      id: { 
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      universityId : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'universities',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      description: {
        type: Sequelize.STRING
      },
      programs_related: {
        type: Sequelize.STRING
      },
      subjects_related: {
        type: Sequelize.STRING
      }
    });
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('university_courses');
  }
};
