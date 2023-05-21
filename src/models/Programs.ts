// models/University.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';


export interface ProgramsAttributes {
    id: number | undefined;
    name: string | undefined;
    universityId: number | undefined;
    description: string | undefined;
    courses_related: string | undefined;
}

class Programs extends Model<ProgramsAttributes> implements ProgramsAttributes {
    public id!: number | undefined;
    public name: string | undefined;
    public universityId: number | undefined;
    public description: string | undefined;
    public courses_related: string | undefined;
  // Otros atributos de la universidad
}

Programs.init(
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
          type: DataTypes.STRING,
          allowNull: false,
      },
      courses_related: {
          type: DataTypes.STRING,
          allowNull: false,
      }
  },
  {
    sequelize,
    modelName: 'Programs',
    tableName: 'programs',
    timestamps: false,
  }
);

export default Programs;