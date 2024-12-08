# TWEBProject_Bianca_Andreea_Matei_ANIIIS

Project Title
Clasificare și Număr de Înregistrare pentru Documente Electronice (cu integrare Dropbox/Google Drive)

a. Project Description
The purpose of this project is to build an application that allows users to organize electronic documents by categories, upload them to an external storage service
(Dropbox or Google Drive), and manage them via a user-friendly web interface.

The project includes:

A RESTful back-end that handles the application’s logic and communicates with a database to store category and document data.
A Single-Page Application (SPA) front-end, providing users with an intuitive interface.
Integration with an external service (Dropbox or Google Drive) to store uploaded documents.

b. Functional Requirements

1. Category Management
Create, view, update, and delete categories.
Example Categories: "Contracts," "Invoices," "Personal"

2. Document Management
Add a document to a category with details like:
Name
Description
Creation date
Save documents to Dropbox or Google Drive.
View and delete existing documents.
Use Dropbox or Google Drive APIs to upload documents.
Generate and save a shareable link for the uploaded document.

c. Web Interface
The application will use React.js to:

View categories and documents.
Perform actions on documents, including:
Add
Delete
View

d. Database and Entities
Entities
Category (Parent): Contains information about the document category.
Document (Child): Contains information about individual documents, including the external link to Dropbox/Google Drive.

e. Application Workflow
The user accesses the web interface and creates categories (e.g., "Legal," "Invoices").
The user uploads a document, which:
Is saved to Dropbox/Google Drive using their respective APIs.
Is registered in the database with a link to its external location.
The user can view, download, or delete documents via the interface.

f. Conclusions
f1. Project Structure

/project-root
|-- /client                  # Front-end (React.js)
|   |-- /node_modules        # Locally installed modules
|   |-- /public              # Public assets (HTML, JS, CSS)
|       |-- index.html       # Main HTML file
|       |-- script.js        # JavaScript functionality
|       |-- style.css        # CSS styling for public files
|   |-- /src                 # React application source files
|       |-- /components      # React components
|           |-- Categories.js        # Component for managing categories
|           |-- CategoryList.js      # Component to display category lists
|           |-- CreateCategory.js    # Component to create new categories
|           |-- CreateDocument.js    # Component to create new documents
|           |-- DocumentList.js      # Component to display document lists
|           |-- Documents.js         # Component for managing documents
|       |-- api.js           # Functions for API calls
|       |-- App.css          # Styles for the main React component
|       |-- App.js           # Main React component
|       |-- index.css        # Global styles for the application
|       |-- index.js         # React entry point
|   |-- .env                 # Front-end environment configuration
|   |-- package-lock.json    # Dependency details
|   |-- package.json         # Front-end metadata and dependencies
|
|-- /server                  # Back-end (Node.js/Express.js)
|   |-- /controllers         # Business logic
|       |-- categoryController.js    # Controller for category logic
|       |-- documentController.js    # Controller for document logic
|   |-- /database            # Database configuration
|       |-- database.sqlite  # SQLite database file
|       |-- sequelize.js     # Sequelize configuration
|   |-- /models              # Database models
|       |-- associations.js  # Configuration for model relationships
|       |-- Category.js      # Model for categories
|       |-- Document.js      # Model for documents
|   |-- /routes              # API routes
|       |-- categoryRoutes.js # Routes for category API
|       |-- documentRoutes.js # Routes for document API
|   |-- .env                 # Back-end environment configuration
|   |-- app.js               # Server entry point
|   |-- package-lock.json    # Dependency details
|   |-- package.json         # Back-end metadata and dependencies
|
|-- README.md                # Project documentation


f2. Features
Category Management:

Create, edit, delete, and view document categories.
Document Management:

Add, view, delete, and organize documents under specific categories.
External Integration:

Upload documents to Dropbox or Google Drive.
Retrieve and save the file link for access.
User-Friendly Interface:

Built using React.js, providing a responsive and interactive design.

Run Instructions:

- cd project-root
  -npm install
- cd client
  - npm install
- cd ..
- cd server
    - npm install
- cd ..
- cd client
    - npm start
- cd server
    -npm start

Testing Instructions in Postman:

For Category:

GET: http://localhost:3000/api/categories

Post: http://localhost:3000/api/categories
  Headers: Content-Type: application/json
  Body:
  {
  "name": "Category",
  "description": "Category for contract documents"
  }

Put (Update): http://localhost:3000/api/categories/:id
    Headers: Content-Type: application/json
    {
  "name": "Updated Category",
  "description": "Updated category description"
    }

Delete : http://localhost:3000/api/categories/:id

For Document:


GET: http://localhost:3000/api/documents

Post: http://localhost:3000/api/documents
  Headers: Content-Type: application/json
  Body: 
  {
  "name": "Invoice_001",
  "description": "Invoice for March",
  "externalLink": "https://www.example.com/link-to-file",
  "categoryId": 1, 
  "creationDate": "01-06-2024"
  } 

Put (Update): http://localhost:3000/api/documents/:id
    Headers: Content-Type: application/json
    {
  "name": "Updated Document",
  "description": "Updated document description"
    }

Delete : http://localhost:3000/api/documents/:id


