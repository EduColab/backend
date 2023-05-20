import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  database: 'colombi_educolab', // Reemplaza con el nombre de tu base de datos
  dialect: 'mysql', // Reemplaza si estás utilizando otro tipo de base de datos
  username: 'colombi_educolab', // Reemplaza con tu nombre de usuario de la base de datos
  password: 'Educolab23', // Reemplaza con tu contraseña de la base de datos
  host: '192.185.79.149',
  models: [ '/models'], // Ruta al directorio de modelos
});

sequelize.sync(); // Sincroniza los modelos con la base de datos 
export default sequelize;