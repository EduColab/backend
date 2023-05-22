// models/University.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

export interface UniversityCourseAttributes {
    id: number | undefined;
    name: string | undefined;
    universityId: number | undefined;
    description: string | undefined;
    programs_related: string | undefined;
    subjects_related: string | undefined;
}

class UniversityCourse extends Model<UniversityCourseAttributes> implements UniversityCourseAttributes {
    public id!: number | undefined;
    public name: string | undefined;
    public universityId: number | undefined;
    public description: string | undefined;
    public programs_related: string | undefined;
    public subjects_related: string | undefined;
  // Otros atributos de la universidad
}

UniversityCourse.init(
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
      programs_related: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      subjects_related: {
          type: DataTypes.STRING,
          allowNull: false,
      }
  },
  {
    sequelize,
    modelName: 'UniversityCourse',
    tableName: 'university_courses',
    timestamps: false,
  }
);

export default UniversityCourse;