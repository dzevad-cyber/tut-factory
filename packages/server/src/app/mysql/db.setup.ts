import { Sequelize } from 'sequelize';
import { dbConnect, syncModels } from './db.utils';

import '../models/course.model';

const dbSetup = (sequelize: Sequelize) => {
  dbConnect(sequelize);
  syncModels(sequelize);
};

export default dbSetup;
