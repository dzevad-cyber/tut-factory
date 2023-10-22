import { DataTypes, Model } from 'sequelize';
import sequelize from '../mysql/db.create';

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
  image_url: {
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

export type Course = {
  // course_id: number;
  // user_id: number;
  // category_id: number;
  title: string;
  description: string;
  image_url: string;
  price: number;
  isPublished: boolean;
};

export default Course;
