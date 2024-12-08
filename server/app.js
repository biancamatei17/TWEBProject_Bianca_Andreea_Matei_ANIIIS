const express = require('express');
const sequelize = require('./database/sequelize'); // Database connection
const { Category, Document } = require('./models/associations'); // Centralized models
const categoryRoutes = require('./routes/categoryRoutes'); // Import routes for categories
const documentRoutes = require('./routes/documentRoutes'); // Import routes for documents

const app = express();
app.use(express.json());

// Test database connection and synchronize
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection established successfully!');
    return sequelize.sync({ force: false }); // Synchronize without deleting existing data
  })
  .catch((err) => console.error('Error connecting to the database:', err));

// Test route
app.get('/', (req, res) => res.send('Server is running!'));

// Set up routes with the `/api` prefix
app.use('/api/categories', categoryRoutes);
app.use('/api/documents', documentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
