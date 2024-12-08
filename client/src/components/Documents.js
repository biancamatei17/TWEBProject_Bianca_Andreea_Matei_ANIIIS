import React from 'react';
import CreateDocument from './CreateDocument';
import DocumentList from './DocumentList';

const Documents = () => {
  const refreshDocuments = () => {
   // Logic for reloading the list of documents
    console.log("Refreshing document list...");
  };

  return (
    <div>
      <h1>Documents</h1>
      <CreateDocument onDocumentCreated={refreshDocuments} />
      <DocumentList />
    </div>
  );
};

export default Documents;
