// search.js

// Función para buscar libros por título o autor
function searchBooks(query) {
    let books = JSON.parse(localStorage.getItem('books')) || []; // Cargar libros desde localStorage o archivo JSON
    let results = books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()) || book.author.toLowerCase().includes(query.toLowerCase()));
    displayBooks(results);
}

function displayBooks(books) {
    let bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; // Limpiar lista actual
    books.forEach(book => {
        let bookItem = document.createElement('div');
        bookItem.classList.add('book');
        bookItem.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
            <button>Leer</button>
        `;
        bookList.appendChild(bookItem);
    });
}
