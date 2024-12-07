const express = require('express');
const sequelize = require('./database/sequelize'); // Conexiunea la baza de date
const { Category, Document } = require('./models/associations'); // Modelele centralizate
const categoryRoutes = require('./routes/categoryRoutes'); // Importă rutele pentru categorii
const documentRoutes = require('./routes/documentRoutes'); // Importă rutele pentru documente

const app = express();
app.use(express.json());

// Testarea conexiunii și sincronizarea bazei de date
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexiunea la baza de date a fost realizată cu succes!');
    return sequelize.sync({ force: false }); // Sincronizare fără ștergerea datelor existente
  })
  .catch((err) => console.error('Eroare la conectarea bazei de date:', err));

// Ruta de test
app.get('/', (req, res) => res.send('Serverul funcționează!'));

// Configurează rutele cu prefixul `/api`
app.use('/api/categories', categoryRoutes);
app.use('/api/documents', documentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serverul rulează pe portul ${PORT}`));
