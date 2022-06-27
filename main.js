var tasks = [];

function getTask() {
  tasksCollection = JSON.parse(localStorage.getItem('tasks'));
  if (tasksCollection) tasks = tasksCollection;
}

function addTask() {
  const taskInput = document.getElementById('taskInput').value;
  const options = {year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date();
  date.toLocaleDateString("en-US", options);

  const task = {
    name: taskInput,
    date: date, 
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
    <li ">
      <p>${task.name}</p>
      <p>${task.date}</p>
    </li>
    `;
    taskHTML += template; 
  })
  
  document.getElementById('taskOutlet').innerHTML = taskHTML
}

//startup
renderTask()



