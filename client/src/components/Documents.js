import React, { useState } from "react";

const Documents = () => {
  const [categories, setCategories] = useState(["Category1", "Category2"]); // Test categories
  const [documents, setDocuments] = useState([]);
  const [newDocument, setNewDocument] = useState({
    name: "",
    description: "",
    category: "",
    file: null,
  });

  const addDocument = () => {
    const { category, name, file } = newDocument;
    if (!category || !name || !file) {
      alert("All fields are required!");
      return;
    }
    setDocuments([...documents, newDocument]);
    setNewDocument({ name: "", description: "", category: "", file: null });
  };

  const deleteDocument = (index) => {
    const updatedDocuments = documents.filter((_, i) => i !== index);
    setDocuments(updatedDocuments);
  };

  return (
    <div>
      <h1>Documents</h1>
      <div>
        <label>Category</label>
        <select
          value={newDocument.category}
          onChange={(e) =>
            setNewDocument({ ...newDocument, category: e.target.value })
          }
        >
          <option value="">Choose a category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <input
          type="text"
          placeholder="Document Name"
          value={newDocument.name}
          onChange={(e) =>
            setNewDocument({ ...newDocument, name: e.target.value })
          }
        />
        <textarea
          placeholder="Description"
          value={newDocument.description}
          onChange={(e) =>
            setNewDocument({ ...newDocument, description: e.target.value })
          }
        />
        <input
          type="file"
          onChange={(e) =>
            setNewDocument({ ...newDocument, file: e.target.files[0].name })
          }
        />
        <button onClick={addDocument}>Add Document</button>
      </div>
      <ul>
        {documents.map((doc, index) => (
          <li key={index}>
            <strong>{doc.name}</strong>
            <p>{doc.description}</p>
            <p>Category: {doc.category}</p>
            <button onClick={() => deleteDocument(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Documents;
