'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommunityCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
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
          allowNull:false
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
  return CommunityCourse;
};