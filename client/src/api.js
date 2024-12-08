// src/api.js
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

// Funcții pentru categorii
export const getCategories = async () => {
  const response = await fetch(`${API_URL}/categories`);
  if (!response.ok) {
    throw new Error('Error getting categories');
  }
  return response.json();
};

export const createCategory = async (categoryData) => {
  const response = await fetch(`${API_URL}/categories`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(categoryData),
  });
  if (!response.ok) {
    throw new Error('Error creating category');
  }
  return response.json();
};

// Funcții pentru documente
export const getDocuments = async () => {
  const response = await fetch(`${API_URL}/documents`);
  if (!response.ok) {
    throw new Error('Error getting documents');
  }
  return response.json();
};

export const createDocument = async (documentData) => {
  const response = await fetch(`${API_URL}/documents`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(documentData),
  });
  if (!response.ok) {
    throw new Error('Error creating the document');
  }
  return response.json();
};