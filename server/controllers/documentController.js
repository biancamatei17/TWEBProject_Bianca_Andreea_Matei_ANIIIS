// documentController.js

const Document = require('../models/Document');

exports.getDocuments = async (req, res) => {
  try {
    const documents = await Document.findAll();
    res.status(200).json(documents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createDocument = async (req, res) => {
  try {
    const { name, description, externalLink } = req.body;
    
    // Verifică dacă externalLink este prezent
    if (!externalLink) {
      return res.status(400).json({ error: "externalLink is required" });
    }
    
    const document = await Document.create({
      name,
      description,
      externalLink
    });
    
    res.status(201).json(document);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateDocument = async (req, res) => {
  try {
    const document = await Document.update(req.body, {
      where: { id: req.params.id },
    });

    if (document[0] === 0) {
      return res.status(404).json({ message: 'Document not found' });
    }

    res.status(200).json({ message: 'Document updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteDocument = async (req, res) => {
  try {
    await Document.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Document deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
