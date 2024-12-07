// models/associations.js
const Category = require('./Category');
const Document = require('./Document');

// Definirea relațiilor
Document.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Document, { foreignKey: 'categoryId' });

module.exports = { Category, Document };
