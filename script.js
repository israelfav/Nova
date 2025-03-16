
let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const category = document.getElementById("categorySelect").value;
  if (taskInput.value.trim() !== "") {
    tasks.push({ text: taskInput.value.trim(), completed: false, category: category });
    taskInput.value = "";
    renderTasks();
  }
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.innerHTML = \`\${task.text} <span>[ \${task.category} ]</span> <button onclick="toggleTask(\${index})">\${task.completed ? "Undo" : "Done"}</button> <button onclick="deleteTask(\${index})">Delete</button>\`;
    taskList.appendChild(li);
  });
  updateProgress();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function searchTasks() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = tasks.filter(task => task.text.toLowerCase().includes(query));
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  filtered.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.innerHTML = \`\${task.text} <span>[ \${task.category} ]</span> <button onclick="toggleTask(\${index})">\${task.completed ? "Undo" : "Done"}</button> <button onclick="deleteTask(\${index})">Delete</button>\`;
    taskList.appendChild(li);
  });
}

function updateProgress() {
  const progressBar = document.getElementById("progressBar");
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  progressBar.style.width = percent + "%";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
