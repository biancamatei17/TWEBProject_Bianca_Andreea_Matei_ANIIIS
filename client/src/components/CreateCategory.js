// client/components/CreateCategory.js
import React, { useState } from 'react';
import { createCategory } from '../api'; // Importă funcția createCategory din api.js

const CreateCategory = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCategory({ name, description });
      alert('Categoria a fost creată cu succes!');
      setName('');
      setDescription('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nume categorie:</label>
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Creează</button>
    </form>
  );
};

export default CreateCategory;
