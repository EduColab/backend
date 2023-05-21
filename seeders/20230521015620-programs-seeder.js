'use strict';
const faker = require('faker');
const { University } = require("../models");
//const University = require("./../models/university");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const universityIds = await University.findAll({
      attributes: ['id'], // Obtén solo la columna "id"
      raw: true, // Devuelve un arreglo de objetos sin metadatos adicionales
    });

    const programs = [
      'Administración de Empresas',
      'Economía',
      'Finanzas',
      'Marketing',
      'Contabilidad',
      'Gestión de Recursos Humanos',
      'Comercio Internacional',
      'Gestión Empresarial',
      'Emprendimiento',
      'Administración Pública',
    ];
    const programsData = []

  programs.forEach(element => {  	

    const randomUniversityId = faker.random.arrayElement(universityIds).id;
     programsData.push({
        name: element,
        universityId: randomUniversityId,
        description: faker.lorem.paragraph(),
        courses_related: "[]"
      })
  });
  

   await queryInterface.bulkInsert('programs', programsData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('programs', null, {});
  }
};
