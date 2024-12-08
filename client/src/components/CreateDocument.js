// client/src/components/CreateDocument.js

import React, { useState } from 'react';
import { createDocument, getCategories } from '../api'; // Imports functions from api.js
import { useEffect } from 'react';

const CreateDocument = ({ onDocumentCreated }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [externalLink, setExternalLink] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);

  // Gets the categories from the API when the component is mounted
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description || !externalLink || !categoryId) {
      alert('All fields are required!');
      return;
    }

    try {
      const newDocument = { name, description, externalLink, categoryId };
      await createDocument(newDocument); // Send the data to the API to create the document
      onDocumentCreated(); // Reload the document list after adding
      setName('');
      setDescription('');
      setExternalLink('');
      setCategoryId('');
    } catch (error) {
      alert(`Error creating document: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Document Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter document name"
        />
      </div>

      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />
      </div>

      <div>
        <label>External Link:</label>
        <input
          type="text"
          value={externalLink}
          onChange={(e) => setExternalLink(e.target.value)}
          placeholder="Enter external link"
        />
      </div>

      <div>
        <label>Category:</label>
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">Create Document</button>
    </form>
  );
};

export default CreateDocument;
