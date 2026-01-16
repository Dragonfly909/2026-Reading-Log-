const TOTAL_SLOTS = 50;
 
async function loadBooks() {
  try {
    const response = await fetch('books.json');
    const books = await response.json();
    const shelf = document.getElementById('bookshelf');
 
    console.log("Books loaded:", books);
 
    for (let i = 0; i < TOTAL_SLOTS; i++) {
      const slot = document.createElement('div');
      slot.className = 'book-slot';
 
      if (i < books.length) {
        const item = books[i];
        if (item.type && item.type.toLowerCase() === "decor") {
          slot.classList.add('decor-slot');
          const img = document.createElement('img');
          img.src = item.cover;
          img.alt = item.title || 'Decor';
          slot.appendChild(img);
        } else {
          slot.classList.add('book-filled');
          slot.style.backgroundColor = getRandomColor();
          slot.innerText = item.title || '';
          slot.onclick = () => openBook(item);
        }
      } else {
        slot.classList.add('book-empty');
      }
 
      shelf.appendChild(slot);
    }
  } catch (error) {
    console.error("Error loading or rendering shelf:", error);
  }
}
 
function getRandomColor() {
  const colors = ['#f39c12', '#8e44ad', '#3498db', '#27ae60', '#e67e22', '#9b59b6', '#c0392b'];
  return colors[Math.floor(Math.random() * colors.length)];
}
 
function openBook(book) {
  const modal = document.getElementById('bookModal');
  modal.style.display = 'block';
  document.getElementById('cover').src = book.cover || '';
  document.getElementById('title').innerText = book.title || '';
  document.getElementById('author').innerText = book.author || '';
  document.getElementById('synopsis').innerText = book.synopsis || '';
}
 
function closeBook() {
  document.getElementById('bookModal').style.display = 'none';
}
 
window.addEventListener('click', e => {
  const modal = document.getElementById('bookModal');
  if (e.target === modal) closeBook();
});
 
window.addEventListener('keydown', e => {
  if (e.key === "Escape") closeBook();
});
 
loadBooks();
