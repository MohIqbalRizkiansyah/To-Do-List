// Ambil elemen-elemen yang diperlukan
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Tambahkan event listener untuk form
todoForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Mencegah reload halaman saat submit form
  
  // Ambil nilai input
  const newTodoText = todoInput.value;
  
  // Buat elemen <li> baru
  const newTodoItem = document.createElement('li');
  newTodoItem.innerHTML = `
    ${newTodoText}
    <button class="delete-btn">Hapus</button>
  `;
  
  // Tambahkan elemen baru ke daftar
  todoList.appendChild(newTodoItem);
  
  // Kosongkan input setelah submit
  todoInput.value = '';
  
  // Tambahkan event listener untuk tombol hapus
  const deleteBtn = newTodoItem.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', function() {
    todoList.removeChild(newTodoItem);
  });
});
