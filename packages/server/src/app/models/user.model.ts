import { DataTypes, Model } from 'sequelize';
import sequelize from '../mysql/db.create';
import bcrypt from 'bcryptjs';
import { UserModelAttributes } from '@shared/src/types';

const User = sequelize.define<Model<UserModelAttributes>>(
  'User',
  {
    firstName: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: {
          msg: 'First name must only contain letters',
        },
        len: {
          args: [3, 30],
          msg: 'First name must be between 2 and 30 characters',
        },
      },
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: {
          msg: 'Last name name must only contain letters',
        },
        len: {
          args: [3, 30],
          msg: 'Last name must be between 2 and 30 characters',
        },
      },
      defaultValue: null,
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
      defaultValue: null,
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
    defaultScope: {
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
    },
    scopes: {
      withTimestamps: {
        include: ['createdAt', 'updatedAt'],
      },
    },
    hooks: {
      beforeCreate: async (user) => {
        const hashedPassword = await bcrypt.hash(
          user.getDataValue('password'),
          14
        );

        user.setDataValue('password', hashedPassword);
      },
    },
    timestamps: true,
    deletedAt: 'deleted_at',
  }
);

export default User;
