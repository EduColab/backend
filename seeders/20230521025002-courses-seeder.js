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
      ['Curso de Administración Estratégica','Aprende a diseñar y ejecutar estrategias efectivas para el éxito empresarial.'],
      ['Curso de Marketing Internacional','Descubre las estrategias y tácticas para incursionar en mercados globales y expandir tu negocio.'],
      ['Curso de Gestión Financiera','Domina las habilidades para tomar decisiones financieras acertadas y optimizar los recursos de la empresa.'],
      ['Curso de Macroeconomía Avanzada','Explora los principales modelos y teorías macroeconómicas y su aplicación en el análisis económico.'],
      ['Curso de Economía del Desarrollo','Comprende los desafíos económicos de los países en desarrollo y las políticas para impulsar el crecimiento.'],
      ['Curso de Econometría Aplicada','Aprende a utilizar herramientas estadísticas para analizar y predecir fenómenos económicos.'],
      ['Curso de Valoración de Activos Financieros','Domina las técnicas de valoración de acciones, bonos y otros instrumentos financieros.'],
      ['Curso de Gestión de Riesgos Financieros','Aprende a identificar, medir y gestionar los riesgos financieros en el entorno empresarial.'],
      ['Curso de Mercados Financieros Internacionales','Explora los mercados financieros globales y comprende su funcionamiento e interconexiones.'],
      ['Curso de Investigación de Mercados','Descubre cómo obtener y analizar información clave para la toma de decisiones de marketing.'],
      ['Curso de Comportamiento del Consumidor','Conoce los factores que influyen en el comportamiento de los consumidores y cómo aprovecharlos en tu estrategia de marketing.'],
      ['Curso de Estrategias de Marketing Digital','Aprende a diseñar y ejecutar estrategias efectivas de marketing en el entorno digital.'],
      ['Curso de Contabilidad de Costos','Aprende a calcular y analizar los costos de producción y tomar decisiones basadas en información contable.'],
      ['Curso de Auditoría Financiera','Explora los principios y técnicas de auditoría para evaluar la veracidad y confiabilidad de los estados financieros.'],
      ['Curso de Normas Internacionales de Información Financiera','Domina las normas internacionales de contabilidad y su aplicación en informes financieros.'],
      ['Curso de Gestión del Talento','Descubre estrategias para reclutar, retener y desarrollar el talento humano en las organizaciones.'],
      ['Curso de Relaciones Laborales','Aprende a gestionar las relaciones laborales, negociar contratos y resolver conflictos en el entorno laboral.'],
      ['Curso de Desarrollo Organizacional','Explora técnicas y prácticas para promover el cambio y el desarrollo positivo en las organizaciones.'],
    ];
    const coursesData = []

  courses.forEach(element => {  	

    const randomUniversityId = faker.random.arrayElement(universityIds).id;
     coursesData.push({
      
      name: element[0],	
      universityId: randomUniversityId,	
      description: element[1],	
      programs_related: "[]",	
      subjects_related: "[]"
      })
  });
  

   await queryInterface.bulkInsert('university_courses', coursesData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('university_courses',null, {});
  }
};
