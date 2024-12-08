import React, { useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  const addCategory = () => {
    if (!newCategory.trim()) {
      alert("Please enter a category name!");
      return;
    }
    setCategories([...categories, newCategory]);
    setNewCategory(""); // Resets the input field
  };

  const deleteCategory = (index) => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
  };

  return (
    <div>
      <h1>Categories</h1>
      <div>
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Category Name"
        />
        <button onClick={addCategory}>Add Category</button>
      </div>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            {category}
            <button onClick={() => deleteCategory(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;