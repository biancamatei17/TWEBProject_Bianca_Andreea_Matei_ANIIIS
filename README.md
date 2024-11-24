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
|-- /server               # Back-end (Node.js/Express.js)
|   |-- /routes           # API endpoints
|   |-- /models           # Database models/entities
|   |-- /controllers      # Business logic
|   |-- app.js            # Entry point for the server
|   |-- .env.example      # Environment variable configuration example
|
|-- /client               # Front-end (React.js)
|   |-- /src
|       |-- /components   # React components
|       |-- /pages        # SPA pages
|       |-- App.js        # Main application file
|       |-- index.js      # Entry point for React
|-- README.md             # Documentation
|-- package.json          # Project metadata and dependencies

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
