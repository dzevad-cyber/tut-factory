import { DataTypes, Model } from 'sequelize';
import sequelize from '../mysql/db.create';
import bcrypt from 'bcryptjs';
import { UserModelAttributes } from '@shared/types/models/user.type';
import AppError from '../utils/error/error';

const User = sequelize.define<Model<UserModelAttributes>>(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
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
    confirmPassword: {
      type: DataTypes.VIRTUAL,
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
    changedPasswordAt: {
      type: 'TIMESTAMP',
      allowNull: true,
    },
  },
  {
    defaultScope: {
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
    },
    scopes: {
      withTimestamps: {
        attributes: {
          include: ['createdAt', 'updatedAt'],
        },
      },
      withPassword: {
        attributes: {
          include: ['password'],
        },
      },
    },
    hooks: {
      beforeCreate: async (user) => {
        const hashedPassword = await bcrypt.hash(
          user.getDataValue('password'),
          12
        );
        const hashedConfirmPassword = await bcrypt.hash(
          user.getDataValue('confirmPassword'),
          12
        );

        const confirmPassword = user.getDataValue('confirmPassword');

        const passwordMatch = await bcrypt.compare(
          confirmPassword,
          hashedPassword
        );

        if (passwordMatch) {
          user.setDataValue('password', hashedPassword);
          user.setDataValue('confirmPassword', hashedConfirmPassword);
        } else {
          throw new AppError('Passwords do not match', 400);
        }
      },
    },
    timestamps: true,
  }
);

export default User;
