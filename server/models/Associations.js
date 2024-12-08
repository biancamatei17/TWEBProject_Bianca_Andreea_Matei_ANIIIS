// models/associations.js
const Category = require('./Category');
const Document = require('./Document');

// Defining relationships
Document.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Document, { foreignKey: 'categoryId' });

module.exports = { Category, Document };