const TOTAL_SLOTS = 50; // Change this for your goal number of books
 
async function loadBooks() {
  try {
    const response = await fetch('books.json');
    const books = await response.json();
    const shelf = document.getElementById('bookshelf');
 
    for (let i = 0; i < TOTAL_SLOTS; i++) {
      const bookDiv = document.createElement('div');
      bookDiv.className = 'book-slot';
 
      if (i < books.length) {
        // Filled slot
        const book = books[i];
        bookDiv.classList.add('book-filled');
        bookDiv.style.backgroundColor = getRandomColor();
        bookDiv.innerText = book.title;
        bookDiv.onclick = () => openBook(book);
      } else {
        // Empty slot
        bookDiv.classList.add('book-empty');
        bookDiv.innerText = '';
      }
 
      shelf.appendChild(bookDiv);
    }
  } catch (error) {
    console.error("Error loading books:", error);
  }
}
 
function getRandomColor() {
  const colors = ['#f39c12', '#8e44ad', '#3498db', '#27ae60', '#e67e22', '#9b59b6', '#c0392b'];
  return colors[Math.floor(Math.random() * colors.length)];
}
 
function openBook(book) {
  document.getElementById('bookModal').style.display = 'block';
  document.getElementById('cover').src = book.cover;
  document.getElementById('title').innerText = book.title;
  document.getElementById('author').innerText = book.author;
  document.getElementById('synopsis').innerText = book.synopsis || '';
}
 
function closeBook() {
  document.getElementById('bookModal').style.display = 'none';
}
 
loadBooks();
