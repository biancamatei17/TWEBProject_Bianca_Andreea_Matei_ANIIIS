const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const Document = sequelize.define(
  'Document',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    externalLink: {
      type: DataTypes.STRING,
      allowNull: true, // Change this "false" to "true" to make this field optional
    },
  },
  { 
    timestamps: true 
  }
);

module.exports = Document;