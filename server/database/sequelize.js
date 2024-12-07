const { Sequelize } = require('sequelize');

// Configurare conexiune SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.STORAGE_PATH || './database/database.sqlite',
  logging: false,
});

module.exports = sequelize;
