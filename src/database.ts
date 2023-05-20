import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv'
dotenv.config()

export const sequelize = new Sequelize({
  database: process.env.DB_NAME, // Reemplaza con el nombre de tu base de datos
  dialect: 'mysql', // Reemplaza si estás utilizando otro tipo de base de datos
  username: process.env.DB_NAME, // Reemplaza con tu nombre de usuario de la base de datos
  password: process.env.DB_PASSWORD, // Reemplaza con tu contraseña de la base de datos
  host: process.env.DB_HOST,
  models: [ '/models'], // Ruta al directorio de modelos
});

sequelize.sync(); // Sincroniza los modelos con la base de datos 
export default sequelize;