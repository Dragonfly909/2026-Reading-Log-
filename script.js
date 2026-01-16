.book-slot {
  width: 60px;
  height: 200px;
  writing-mode: vertical-rl;
  text-orientation: upright;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  border-radius: 3px;
  margin: 5px;
  box-shadow: 2px 2px 5px rgba(0,0,0,.2);
  transition: transform 0.2s ease;
}
 
.book-filled {
  color: #fff;
}
 
.book-filled:hover {
  transform: translateY(-5px);
}
 
.book-empty {
  background-color: #ddd;
  border: 2px dashed #bbb;
  cursor: default;
}
