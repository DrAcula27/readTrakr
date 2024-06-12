document.addEventListener('DOMContentLoaded', loadLibrary);

const searchButton = document.querySelector('#searchButton');
searchButton.addEventListener('click', searchBooks);

function searchBooks(e) {
  e.preventDefault();

  const query = document.getElementById('searchInput').value;
  if (!query) {
    alert('Please enter a search query');
    return;
  }

  fetch(`https://openlibrary.org/search.json?q=${query}`)
    .then((response) => response.json())
    .then((data) => displayResults(data.docs))
    .catch((error) => console.error('Error fetching data:', error));
}

function displayResults(books) {
  const resultsSection = document.getElementById('results');
  resultsSection.innerHTML = '';
  const library = JSON.parse(localStorage.getItem('library')) || [];

  books.forEach((book) => {
    const bookArticle = document.createElement('article');
    bookArticle.className = 'book';

    const title = book.title ? book.title : 'No title available';
    const author = book.author_name
      ? book.author_name.join(', ')
      : 'No author available';
    const isbn = book.isbn ? book.isbn[0] : 'No ISBN available';
    const coverId = book.cover_i ? book.cover_i : null;
    const coverUrl = coverId
      ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
      : 'https://via.placeholder.com/128x193.png?text=No+Cover';

    let alreadyInLibrary = library.find(
      (libraryBook) => libraryBook.isbn === isbn
    );

    bookArticle.innerHTML = `
      <img src="${coverUrl}" alt="Cover Image">
      <h3>${title}</h3>
      <p><strong>Author:</strong> ${author}</p>
      <p><strong>ISBN:</strong> ${isbn}</p>
      ${
        alreadyInLibrary
          ? '<p><em>Already in Library</em></p>'
          : `<button onclick='addToLibrary("${title}", "${author}", "${isbn}", "${coverUrl}", this)'>Add to Library</button>`
      }
    `;

    resultsSection.appendChild(bookArticle);
  });
}

function addToLibrary(title, author, isbn, coverUrl, button) {
  let library = JSON.parse(localStorage.getItem('library')) || [];

  if (library.find((book) => book.isbn === isbn)) {
    alert('This book is already in your library');
    return;
  }

  const newBook = { title, author, isbn, coverUrl };
  library.push(newBook);
  localStorage.setItem('library', JSON.stringify(library));

  button.innerHTML = 'Added to Library!';
  button.disabled = true;

  loadLibrary();
}

function loadLibrary() {
  const library = JSON.parse(localStorage.getItem('library')) || [];
  const librarySection = document.getElementById('library');
  librarySection.innerHTML = '';

  library.forEach((book) => {
    const bookArticle = document.createElement('article');
    bookArticle.className = 'book';

    bookArticle.innerHTML = `
      <img src="${book.coverUrl}" alt="Cover Image">
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>ISBN:</strong> ${book.isbn}</p>
      <button class='remove' onclick='removeFromLibrary("${book.isbn}", this)'>Remove from Library</button>
    `;

    librarySection.appendChild(bookArticle);
  });
}

function removeFromLibrary(isbn, button) {
  let library = JSON.parse(localStorage.getItem('library')) || [];
  library = library.filter((book) => book.isbn !== isbn);
  localStorage.setItem('library', JSON.stringify(library));

  const bookArticle = button.parentElement;
  bookArticle.parentElement.removeChild(bookArticle);
}
