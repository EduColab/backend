'use strict';
const faker = require('faker');
const bcrypt = require('bcrypt');
const {jwt}  = require("./../build/libs/jwt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = [
      ["uziel"],
      ["duvier"],
      ["eday"],
      ["scat"],
      ["eufanzky"]
    ];

    const usersData = [];
    const passwordHash = await bcrypt.hash("12345", 10);
    users.forEach(element => {  	
      
      const token = jwt.createToken(element[0], passwordHash, `test.${element[0]}@localhost.com`)
       usersData.push({
          username: element[0],
          password: passwordHash,
          email: `test.${element[0]}@localhost.com`,
          token: token
        })
    });
    
 
    await queryInterface.bulkInsert('users', usersData, {});
   },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
