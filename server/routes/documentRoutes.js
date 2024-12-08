// src/routes/documentRoutes.js
const express = require('express');
const { getDocuments, createDocument, updateDocument, deleteDocument } = require('../controllers/documentController'); // Asigură-te că ai adăugat updateDocument
const router = express.Router();

router.get('/', getDocuments);
router.post('/', createDocument);
router.put('/:id', updateDocument);
router.delete('/:id', deleteDocument);

module.exports = router;