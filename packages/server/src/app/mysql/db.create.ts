import { Dialect, Sequelize } from 'sequelize';

const getDatabase = (environment: string | undefined): Sequelize => {
  if (environment === 'development') {
    const sequelize = new Sequelize(
      process.env.MYSQL_DATABASE!,
      process.env.MYSQL_USER!,
      process.env.MYSQL_PASSWORD!,
      {
        host: process.env.MYSQL_HOST,
        dialect: process.env.DB_DIALECT as Dialect,
        logging: false,
      }
    );

    return sequelize;
  } else if (environment === 'production') {
    const sequelize = new Sequelize(
      process.env.MYSQL_DATABASE!,
      process.env.MYSQL_USER!,
      process.env.MYSQL_PASSWORD!,
      {
        host: process.env.MYSQL_HOST,
        dialect: process.env.DB_DIALECT as Dialect,
        logging: false,
      }
    );

    return sequelize;
  } else {
    const sequelize = new Sequelize(
      process.env.MYSQL_DATABASE!,
      process.env.MYSQL_USER!,
      process.env.MYSQL_PASSWORD!,
      {
        host: process.env.MYSQL_HOST,
        dialect: process.env.DB_DIALECT as Dialect,
        logging: false,
      }
    );

    return sequelize;
  }
};

const sequelize = getDatabase(process.env.NODE_ENV);

export default sequelize;
