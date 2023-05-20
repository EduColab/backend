// models/University.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

export interface UniversityAttributes {
  id: number | undefined;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  // Otros atributos de la universidad
}

class University extends Model<UniversityAttributes> implements UniversityAttributes {
  public id: number | undefined;
  public name!: string;
  public email!: string;
  public createdAt!: string;
  public updatedAt!: string;
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
    email: {
        type: DataTypes.STRING,
        allowNull:false
    },
    createdAt: {
        type: DataTypes.STRING,
        allowNull:false
    },
    updatedAt: {
        type: DataTypes.STRING,
        allowNull:true
        
    }
    // Otros atributos de la universidad
  },
  {
    sequelize,
    modelName: 'University',
    tableName: 'universities',
    timestamps: true,
  }
);

export default University;