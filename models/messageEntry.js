const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const messageEntry = sequelize.define('Entry', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    timestamps: false
  })
  
  module.exports = messageEntry;
  