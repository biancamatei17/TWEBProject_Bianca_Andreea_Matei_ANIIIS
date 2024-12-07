// Array for categories and documents
const categories = [];
const documents = [];

// Add a new category
function addCategory(name) {
    if (!name) return alert('Add category name');
    categories.push(name);
    renderCategories();
}

// Delete a category by index
function deleteCategory(index) {
    categories.splice(index, 1);
    renderCategories();
    renderCategoryOptions(); // Updates the dropdown for documents
}

// Show the categories in the list
function renderCategories() {
    const categoryList = document.getElementById('categoryList');
    categoryList.innerHTML = '';

    categories.forEach((category, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = category;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Șterge';
        deleteButton.onclick = () => deleteCategory(index);

        listItem.appendChild(deleteButton);
        categoryList.appendChild(listItem);
    });

    renderCategoryOptions(); // Updates the dropdown for documents
}

// Populate the category selection dropdown
function renderCategoryOptions() {
    const categorySelect = document.getElementById('categorySelect');
    categorySelect.innerHTML = '<option value="">Choose a category...</option>';

    categories.forEach((category) => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

// Adaugă un document nou
function addDocument(category, name, description, file) {
    if (!category || !name || !file) return alert('Toate câmpurile sunt obligatorii!');
    const document = { category, name, description, file };
    documents.push(document);
    renderDocuments(category);
}

// Șterge un document după index
function deleteDocument(index) {
    documents.splice(index, 1);
    renderDocuments(); // Reafișează documentele
}

// Afișează documentele dintr-o categorie selectată
function renderDocuments(selectedCategory) {
    const documentList = document.getElementById('documentList');
    documentList.innerHTML = '';

    documents
        .filter((doc) => doc.category === selectedCategory)
        .forEach((doc, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';

            listItem.innerHTML = `
                <strong>${doc.name}</strong><br>
                <small>${doc.description || 'Fără descriere'}</small><br>
                <a href="#" class="btn btn-link btn-sm">Descarcă document</a>
            `;

            const deleteButton = document.createElement('button');
            deleteButton.className = 'btn btn-danger btn-sm mt-2';
            deleteButton.textContent = 'Șterge';
            deleteButton.onclick = () => deleteDocument(index);

            listItem.appendChild(deleteButton);
            documentList.appendChild(listItem);
        });
}

// Event Listeners pentru butoane
document.getElementById('addCategory').onclick = () => {
    const categoryName = document.getElementById('newCategory').value.trim();
    addCategory(categoryName);
    document.getElementById('newCategory').value = '';
};

document.getElementById('uploadDocument').onclick = () => {
    const category = document.getElementById('categorySelect').value;
    const name = document.getElementById('documentName').value.trim();
    const description = document.getElementById('documentDescription').value.trim();
    const file = document.getElementById('fileInput').files[0]?.name; // Obține numele fișierului
    addDocument(category, name, description, file);
    document.getElementById('documentName').value = '';
    document.getElementById('documentDescription').value = '';
    document.getElementById('fileInput').value = '';
};

// Eveniment pentru schimbarea categoriei selectate
document.getElementById('categorySelect').onchange = (e) => {
    renderDocuments(e.target.value);
};
