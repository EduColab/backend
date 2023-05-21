'use strict';
const faker = require('faker');
const { University } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const universityIds = await University.findAll({
      attributes: ['id'], // Obtén solo la columna "id"
      raw: true, // Devuelve un arreglo de objetos sin metadatos adicionales
    });

    const courses = [
        ['Introducción a la Ingeniería Civil', 'Fundamentos y principios de la ingeniería civil en la planificación y construcción de infraestructuras.'],
        ['Fundamentos de Ingeniería Eléctrica', 'Conceptos básicos de electricidad y sistemas eléctricos en ingeniería.'],
        ['Mecánica de Materiales y Estructuras', 'Estudio de la resistencia de materiales y diseño de estructuras seguras y eficientes.'],
        ['Termodinámica Aplicada a la Ingeniería', 'Principios y aplicaciones de la termodinámica en la ingeniería de sistemas energéticos.'],
        ['Programación y Algoritmos para Ingeniería de Software', 'Desarrollo de habilidades de programación y algoritmos para aplicaciones de software.'],
        ['Análisis de Circuitos Eléctricos', 'Estudio de circuitos eléctricos y análisis de sus propiedades y comportamiento.'],
        ['Ingeniería de Control y Automatización', 'Diseño y control de sistemas automatizados en la industria y la robótica.'],
        ['Ingeniería de Sistemas Operativos', 'Estudio de los sistemas operativos y su gestión en entornos informáticos complejos.'],
        ['Diseño de Elementos Mecánicos', 'Diseño y análisis de componentes mecánicos para aplicaciones industriales.'],
        ['Ingeniería Ambiental y Sostenibilidad', 'Enfoque en la gestión y conservación de recursos naturales y sostenibilidad en proyectos ingenieriles.'],
        ['Ingeniería de Transporte y Vías', 'Diseño y planificación de infraestructuras viales y sistemas de transporte eficientes.'],
        ['Ingeniería de Redes de Comunicación', 'Diseño y configuración de redes de comunicación para transmisión de datos y voz.'],
        ['Fundamentos de Ingeniería Química', 'Principios básicos de la ingeniería química y su aplicación en procesos industriales.'],
        ['Ingeniería Geotécnica y Mecánica de Suelos', 'Estudio de propiedades geotécnicas y su aplicación en diseño de estructuras.'],
        ['Electrónica de Potencia y Accionamientos Eléctricos', 'Diseño y control de sistemas de electrónica de potencia y motores eléctricos.'],
        ['Ingeniería de Procesos Industriales', 'Optimización y control de procesos industriales para mejorar la eficiencia y calidad.'],
        ['Ingeniería de Control de Calidad y Gestión de la Calidad', 'Aplicación de herramientas y métodos para garantizar la calidad en procesos y productos.'],
        ['Ingeniería de Software Avanzada', 'Desarrollo de software complejo, gestión de proyectos y métodos de calidad.'],
        ['Ingeniería de Telecomunicaciones', 'Diseño y gestión de sistemas de comunicación y redes de telecomunicaciones.'],
        ['Investigación de Operaciones y Optimización de Sistemas', 'Métodos y técnicas para optimizar la eficiencia y la toma de decisiones en sistemas complejos.']
      ];
    const coursesData = []

  courses.forEach(element => {  	
     coursesData.push({
      name: element[0],	
      email: faker.internet.email(),	
      description: element[1],	
      programs_related: "[]",	
      subjects_related: "[]"
      })
  });
  

   await queryInterface.bulkInsert('community_courses', coursesData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('community_courses',null, {});
  }
};
