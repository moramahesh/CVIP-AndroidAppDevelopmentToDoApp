const todoList = document.getElementById('todoList');
const newTodoInput = document.getElementById('newTodoInput');

function addTodo() {
    const todoText = newTodoInput.value.trim();
    if (todoText === '') return;

    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', toggleCompleted);

    const textNode = document.createElement('p');
    textNode.textContent = todoText;

    listItem.appendChild(checkbox);
    listItem.appendChild(textNode);
    todoList.appendChild(listItem);

    newTodoInput.value = '';
}

function toggleCompleted(event) {
    const listItem = event.target.parentElement;
    const textNode = listItem.querySelector('p');
    if (event.target.checked) {
        textNode.classList.add('completed');
    } else {
        textNode.classList.remove('completed');
    }
}
