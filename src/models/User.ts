// models/University.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

export interface UserAttributes {
    id: number | undefined;
    username: string | undefined;
    password: string | undefined;
    email: string | undefined;
    token: string | undefined;
}

class User extends Model<UserAttributes> implements UserAttributes {
    public id!: number | undefined;
    public username: string | undefined;
    public password: string | undefined;
    public email: string | undefined;
    public token: string | undefined;
  // Otros atributos de la universidad
}

User.init(
  {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      username: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      token: {
          type: DataTypes.STRING,
          allowNull: false,
      }
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
  }
);

export default User;