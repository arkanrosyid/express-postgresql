const dotEnv = require('dotenv');

if (process.env.NODE_ENV !== "production") {
    const configFile = `../../.env.${process.env.NODE_ENV}`;
    dotEnv.config({ path: configFile });
  } else {
    dotEnv.config();
  }

  module.exports = {
    APP_NAME : process.env.APP_NAME,
    PORT: process.env.PORT,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    ENVIRONMENT: process.env.ENVIRONMENT,

    ACCESS_TOKEN_EXPIRATION_DURATION: process.env.ACCESS_TOKEN_EXPIRES_IN

  };