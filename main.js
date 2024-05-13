function addTask() {
  var input = document.getElementById('taskInput');
  var taskText = input.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  var ul = document.getElementById('taskList');
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(taskText));

  var closeButton = document.createElement('button');
  closeButton.appendChild(document.createTextNode('Delete'));
  closeButton.classList.add('deleteButton');
  closeButton.onclick = function () {
    ul.removeChild(li);
  };

  li.appendChild(closeButton);
  ul.appendChild(li);

  input.value = '';
}

function addTask() {
  var input = document.getElementById('taskInput');
  var taskText = input.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  var ul = document.getElementById('taskList');
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(taskText));

  var editButton = document.createElement('button');
  editButton.appendChild(document.createTextNode('Edit'));
  editButton.classList.add('editButton');
  editButton.onclick = function () {
    editTask(li);
  };

  var deleteButton = document.createElement('button');
  deleteButton.appendChild(document.createTextNode('Delete'));
  deleteButton.classList.add('deleteButton');
  deleteButton.onclick = function () {
    ul.removeChild(li);
  };

  li.appendChild(editButton);
  li.appendChild(deleteButton);
  ul.appendChild(li);

  input.value = '';
}

function editTask(taskItem) {
  var updatedText = prompt('Edit task:', taskItem.firstChild.nodeValue);

  if (updatedText !== null) {
    taskItem.firstChild.nodeValue = updatedText.trim();
  }
}
