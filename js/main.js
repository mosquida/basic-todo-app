var tasks = [];

function getTask() {
  tasksCollection = JSON.parse(localStorage.getItem('tasks'));
  if (tasksCollection) tasks = tasksCollection;
}

function addTask() {
  const taskInput = document.getElementById('taskInput').value;
  const date = new Date();
  currentDate = date.toISOString().substring(0, 10);

  const task = {
    name: taskInput,
    date: currentDate,
    done: false, 
  }
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks));

  document.getElementById('taskInput').value= "";

  renderTask()
}

function renderTask() {
  getTask()
  let taskHTML = ''

  tasks.map((task, index) => {
    const template = `
    <li class="task">
      <div>
        <p class="taskname ${task.done ? ' isDone' : ''}">${task.name}</p>
        <p class="taskdate">${task.date}</p>
      </div>
      <div>
        <button onclick="markDone(${index})">✓</button> 
        <button onclick="deleteTask(${index})">X</button>
      </div>
    </li>
    `;
    taskHTML += template; 
  })
  
  document.getElementById('taskOutlet').innerHTML = taskHTML
}

function deleteTask(id) {
  tasks.splice(id, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks))
  renderTask()
}

function markDone(id) {
  const status = tasks[id].done;
  tasks[id].done = !status;
  console.log(tasks[id])

  localStorage.setItem('tasks', JSON.stringify(tasks))
  renderTask()
}

//startup
renderTask()



