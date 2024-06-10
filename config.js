const { Sequelize } = require('sequelize');
const fs = require('fs');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mariadb',
  port: process.env.DB_PORT,
  dialectOptions: {
    ssl: {
      ca: fs.readFileSync('./ca-cert.pem').toString(),
      rejectUnauthorized: false
    }
  },
  logging: console.log
});

module.exports = sequelize;
