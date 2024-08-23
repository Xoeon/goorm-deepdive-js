const list = document.getElementById('list');
const createBtn = document.getElementById('create-btn');

let todos = [];

createBtn.addEventListener('click', createNewTodo);

function createNewTodo() {
  const item = {
    id: new Date().getTime(),
    text: '',
    complete: false,
  };

  todos.unshift(item);

  const { itemEl, inputEl, removeBtnEl } = createTodoElement(item);

  list.prepend(itemEl);

  inputEl.removeAttribute('disabled');
  inputEl.focus();
  saveToLocalStorage();
}

function createTodoElement(item) {
  const itemEl = document.createElement('div');
  itemEl.classList.add('item');

  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.checked = item.complete;

  if (item.complete) {
    itemEl.classList.add('complete');
  }

  const inputEl = document.createElement('input');
  inputEl.type = 'text';
  inputEl.value = item.text;
  inputEl.setAttribute('placeholder', 'Write sth...');

  let isComposing = false;

  const actionsEl = document.createElement('div');
  actionsEl.classList.add('actions');

  const removeBtnEl = document.createElement('button');
  removeBtnEl.classList.add('material-icons', 'remove-btn');
  removeBtnEl.innerText = 'remove_circles';

  checkboxEl.addEventListener('change', () => {
    item.complete = checkboxEl.checked;
    if (item.complete) {
      itemEl.classList.add('complete');
    } else {
      itemEl.classList.remove('complete');
    }
    saveToLocalStorage();
  });

  inputEl.addEventListener('click', (event) => {
    inputEl.removeAttribute('disabled');
    inputEl.focus();
  });

  inputEl.addEventListener('input', () => {
    item.text = inputEl.value;
  });

  // IME 입력이 시작될 때 호출
  inputEl.addEventListener('compositionstart', () => {
    isComposing = true;
  });

  // IME 입력이 끝났을 때 호출
  inputEl.addEventListener('compositionend', () => {
    isComposing = false;
  });

  inputEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !isComposing) {
      event.preventDefault();
      inputEl.blur();
      saveToLocalStorage();
    }
  });

  removeBtnEl.addEventListener('click', () => {
    todos = todos.filter((t) => t.id !== item.id);
    itemEl.remove();
    saveToLocalStorage();
  });

  actionsEl.append(removeBtnEl);

  itemEl.append(checkboxEl);
  itemEl.append(inputEl);
  itemEl.append(actionsEl);

  return { itemEl, inputEl, removeBtnEl };
}

function saveToLocalStorage() {
  const data = JSON.stringify(todos);

  localStorage.setItem('my_todos', data);
}

function loadFromLocalStorage() {
  const data = localStorage.getItem('my_todos');

  if (data) {
    todos = JSON.parse(data);
  }
}

function displayTodos() {
  loadFromLocalStorage();

  for (let i = 0; i < todos.length; i++) {
    const item = todos[i];
    const { itemEl } = createTodoElement(item);

    list.append(itemEl);
  }
}

displayTodos();
