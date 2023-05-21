'use strict';

const faker = require('faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   const universitiesData = [];

   for (let i=0; i<10; i++) {
    universitiesData.push({
      name: faker.name.lastName() + ' University',
      email: faker.internet.email(),
      createdAt: new Date(),
      updatedAt: new Date(),
    })
   }

   await queryInterface.bulkInsert('universities', universitiesData, {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('universities', null, {});
  }
};
