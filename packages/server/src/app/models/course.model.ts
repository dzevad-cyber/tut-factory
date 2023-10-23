import { DataTypes, Model } from 'sequelize';
import sequelize from '../mysql/db.create';
import type Course from '@shared/src/types/models/course.type';

const Course = sequelize.define<Model<Course>>('Course', {
  // user_id foregin key
  // category foregin key
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
    defaultValue: 0.0,
    allowNull: false,
  },
  isPublished: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default Course;
