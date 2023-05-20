// models/University.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

export interface UniversityAttributes {
  id: number;
  name: string;
  // Otros atributos de la universidad
}

class University extends Model<UniversityAttributes> implements UniversityAttributes {
  public id!: number;
  public name!: string;
  // Otros atributos de la universidad
}

University.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Otros atributos de la universidad
  },
  {
    sequelize,
    modelName: 'University',
    tableName: 'universities',
    timestamps: false,
  }
);

export default University;