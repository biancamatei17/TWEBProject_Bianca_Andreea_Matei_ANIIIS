// client/components/CreateDocument.js
import React, { useState } from 'react';
import { createDocument } from '../api'; // Importă funcția createDocument din api.js

const CreateDocument = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [externalLink, setExternalLink] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createDocument({ name, description, externalLink });
      alert('Documentul a fost creat cu succes!');
      setName('');
      setDescription('');
      setExternalLink('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nume document:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Descriere:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Link extern:</label>
        <input
          type="text"
          value={externalLink}
          onChange={(e) => setExternalLink(e.target.value)}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Creează</button>
    </form>
  );
};

export default CreateDocument;
