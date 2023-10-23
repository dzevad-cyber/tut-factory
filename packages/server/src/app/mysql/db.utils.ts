import { Sequelize } from 'sequelize';
import sequelize from './db.create';

const dbConnectInit = (sequelize: Sequelize) => {
  return () => {
    sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch((error) => {
        console.error('Unable to connect to the database:', error);
      });
  };
};

const syncModelsInit = (sequelize: Sequelize) => {
  return () => {
    sequelize
      .sync({ force: true })
      .then(() => {
        console.log('All models were synchronized successfully.');
      })
      .catch((err) => {
        console.log('Unable to sync models:', err);
      });
  };
};

export const dbConnect = dbConnectInit(sequelize);
export const syncModels = syncModelsInit(sequelize);
