// models/University.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

export interface CommunityCourseAttributes {
    id: number | undefined;
    name: string | undefined;
    email: string | undefined;
    description: string | undefined;
    programs_related: string | undefined;
    subjects_related: string | undefined;
}

class CommunityCourse extends Model<CommunityCourseAttributes> implements CommunityCourseAttributes {
    public id!: number | undefined;
    public name: string | undefined;
    public email: string | undefined;
    public description: string | undefined;
    public programs_related: string | undefined;
    public subjects_related: string | undefined;
  // Otros atributos de la universidad
}

CommunityCourse.init(
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
    modelName: 'CommunityCourse',
    tableName: 'community_courses',
    timestamps: false,
  }
);

export default CommunityCourse;