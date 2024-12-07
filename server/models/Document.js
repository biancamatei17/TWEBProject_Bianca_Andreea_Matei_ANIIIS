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
      allowNull: true, // Schimbă acest "false" în "true" pentru a face acest câmp opțional
    },
  },
  { 
    timestamps: true 
  }
);

module.exports = Document;
