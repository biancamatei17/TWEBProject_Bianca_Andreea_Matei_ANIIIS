// client/components/DocumentList.js
import React, { useEffect, useState } from 'react';
import { getDocuments } from '../api'; // Importă funcția getDocuments din api.js

const DocumentList = () => {
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const data = await getDocuments();
        setDocuments(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDocuments();
  }, []);

  if (error) return <p>{error}</p>;
  if (!documents.length) return <p>Se încarcă...</p>;

  return (
    <ul>
      {documents.map((document) => (
        <li key={document.id}>
          <strong>{document.name}</strong>
          <p>{document.description}</p>
          <a href={document.externalLink} target="_blank" rel="noopener noreferrer">
            Descarcă
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DocumentList;
