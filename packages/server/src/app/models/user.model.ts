import { DataTypes } from 'sequelize';
import sequelize from '../mysql/db.create';

const User = sequelize.define(
  'User',
  {
    first_name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isAlpha: {
          msg: 'First name must only contain letters',
        },
        len: {
          args: [3, 30],
          msg: 'First name must be between 2 and 30 characters',
        },
      },
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isAlpha: {
          msg: 'Last name name must only contain letters',
        },
        len: {
          args: [3, 30],
          msg: 'Last name must be between 2 and 30 characters',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'Invalid email address',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [12, 30],
          msg: 'Password must be between 12 and 30 characters',
        },
      },
    },
    avatar: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'user',
      validate: {
        isIn: {
          args: [['user', 'admin', 'moderator', 'teacher']],
          msg: 'Role must be either user, admin, moderator or teacher',
        },
      },
    },
    isEmailVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
  }
);

export default User;
