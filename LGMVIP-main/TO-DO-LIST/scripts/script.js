const todo = document.forms.todo;

todo.addEventListener('submit', addTask);

function addTask(e) {
  e.preventDefault();
  const IO = this.elements;
  const data = IO.task.value;
  const list = document.querySelector('ul');
  const item = document.createElement('li');
  const text = document.createElement('p');
  text.textContent = data;
  IO.task.value = "";
  item.append(text);
  list.append(item);

  const dumpBtn = document.createElement('button')
  dumpBtn.textContent =  "Delete";
  dumpBtn.type = 'button';
  item.append(dumpBtn);
  dumpBtn.addEventListener('click', dumpTask)

  const editBtn = document.createElement('button');
  editBtn.textContent = "Edit";
  editBtn.type = 'button';
  item.append(editBtn);
  editBtn.addEventListener('click', editTask);

  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'Save';
  saveBtn.type = 'button';
  saveBtn.classList.add('hide');
  item.append(saveBtn);
  saveBtn.addEventListener('click', saveEdit);

  

}

function dumpTask(e) {
  this.parentElement.remove();
}

function editTask(e) {
  const item = this.parentElement;
  const text = item.firstElementChild;
  text.setAttribute('contenteditable', true);
  this.classList.add('hide');
  this.nextElementSibling.classList.remove('hide');
}

function saveEdit(e) {
  const item = this.parentElement;
  const text = item.firstElementChild;
  text.removeAttribute('contenteditable');
  this.classList.add('hide');
  this.previousElementSibling.classList.remove('hide');
}


