// models/University.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

export interface ProgramAttributes {
  id: number | undefined;
  name: string;
  description: string;
  courses_related: string;
  universityId: number;
  // Otros atributos de la universidad
}

class Program extends Model<ProgramAttributes> implements ProgramAttributes {
  public id: number | undefined;
  public name!: string;
  public universityId!: number;
  public description!: string;
  public courses_related!: string;
  // Otros atributos de la universidad
}

Program.init(
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
    universityId: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING
    },
    courses_related: {
      type: DataTypes.STRING
    }
    // Otros atributos de la universidad
  },
  {
    sequelize,
    modelName: 'Program',
    tableName: 'programs',
    timestamps: false,
  }
);

export default Program;