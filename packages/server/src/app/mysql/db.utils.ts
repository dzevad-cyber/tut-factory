import { Sequelize } from 'sequelize';

export const dbConnect = (sequelize: Sequelize) => {
  if (process.env.NODE_ENV === 'development') {
    sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch((error) => {
        console.error('Unable to connect to the database:', error);
      });
  } else {
    console.log('Invalid environment.', process.env.NODE_ENV);
  }
};

export const syncModels = (sequelize: Sequelize) => {
  sequelize
    .sync()
    .then(() => {
      console.log('All models were synchronized successfully.');
    })
    .catch((err) => {
      console.log('Unable to sync models:', err);
    });
};
