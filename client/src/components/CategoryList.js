// client/components/CategoryList.js
import React, { useEffect, useState } from 'react';
import { getCategories } from '../api'; // Imports the getCategories function from api.js

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCategories();
  }, []);

  if (error) return <p>{error}</p>;
  if (!categories.length) return <p>Loading...</p>;

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
  );
};

export default CategoryList;