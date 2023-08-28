import { format } from "date-fns";
import Project from "./Project.js";
import Task from "./Task.js";

let projects = [];
let today = undefined;
let all = undefined;
let completed = undefined;
let uncompleted = undefined;

const initTodo = () => {
  today = Project(
    "today",
    "project section where task with date equals to the system date are bundled",
  );

  all = Project("all", "project section where all task are bundled");

  completed = Project(
    "completed",
    "project section where all task completed are bundled",
  );

  uncompleted = Project(
    "uncompleted",
    "project section where all task uncompleted are bundled",
  );

  const defaultTask = Task(
    "Welcome",
    "high",
    new Date(),
    "Welcome to 'Todo List', start creating task and projects, and get ready to be productive!",
    all
  );

  all.addTask(defaultTask);
  uncompleted.addTask(defaultTask);
  today.addTask(defaultTask);

  projects = [today, all, completed, uncompleted];
  retrieveSavedProjects();
};

const retrieveSavedProjects = () => {
  //localStorage.clear();
  //console.log(JSON.parse(localStorage.getItem("projects")));

  const savedProjects = JSON.parse(localStorage.getItem("projects"));
  if (savedProjects !== null) {
    for (let project of savedProjects) {
      const retrievedProject = Project(project.name, project.description);

      const savedTasks = project.tasks.map((task) =>
        Task(
          task.name,
          task.priority,
          new Date(task.date),
          task.description,
          retrievedProject,
          task.finished,
        ),
      );

      retrievedProject.setTasks(savedTasks);
      projects.push(retrievedProject);

      savedTasks.forEach((task) => {
        all.addTask(task);
        if (task.getState()) completed.addTask(task);
        else uncompleted.addTask(task);
      });
      todayTasks();
    }
  }
};

/* projects api --------------------------------------------------------------*/

const createNewProject = (name, description) => {
  const newProject = Project(name, description);

  projects.push(newProject);

  const data = localStorage.getItem("projects");
  let savedProjects = undefined;

  if (data === null) savedProjects = [];
  else savedProjects = JSON.parse(data);

  savedProjects.push(newProject);
  localStorage.setItem("projects", JSON.stringify(savedProjects));
};

const deleteProject = (name) => {
  const index = projects.findIndex((project) => project.getName() === name);

  const project = projects[index];

  for (let task of project.getTasksCopy()) {
    all.deleteTask(task);
    if (task.getState()) completed.deleteTask(task);
    else uncompleted.deleteTask(task);
    today.deleteTask(task);
  }

  projects.splice(index, 1);
};

const editProject = (originalName, newName, newDescription) => {
  const index = projects.findIndex(
    (project) => project.getName() === originalName,
  );
  projects[index].setName(newName);
  projects[index].setDescription(newDescription);
};

const getProjectsNames = () => projects.map((project) => project.getName());

const getProjectTasks = (projectName) =>
  projects
    .filter((project) => project.getName() === projectName)[0]
    .getTasksCopy();

const getProjectDescription = (projectName) =>
  projects
    .filter((project) => project.getName() === projectName)[0]
    .getDescription();

/* tasks api -----------------------------------------------------------------*/

const createTask = (
  projectName,
  taskName,
  taskPriority,
  taskDate,
  taskDescription,
) => {
  const project = projects.filter(
    (project) => project.getName() === projectName,
  )[0];

  const newTask = Task(
    taskName,
    taskPriority,
    taskDate,
    taskDescription,
    project,
  );
  project.addTask(newTask);
  uncompleted.addTask(newTask);
  all.addTask(newTask);

  const savedProjects = JSON.parse(localStorage.getItem("projects"));
  for (let i = 0; i < savedProjects.length; i++) {
    if (savedProjects[i].name == project.getName())
      savedProjects[i].tasks = project.getTasksCopy();
  }
  localStorage.setItem("projects", JSON.stringify(savedProjects));
};

const editTask = (
  originalTaskName,
  taskProject,
  taskName,
  taskPriority,
  taskDate,
  taskDescription,
) => {
  const task = all
    .getOriginalTasks()
    .filter((task) => task.getName() == originalTaskName)[0];
  const originalProject = task.getProject();
  const newProject = projects.filter(
    (project) => project.getName() === taskProject,
  )[0];

  if (originalProject.getName() !== newProject.getName()) {
    if (originalProject.getName() !== "all") originalProject.deleteTask(task);
    if (newProject.getName() !== "all") newProject.addTask(task);
    task.setProject(newProject);
  }

  task.setName(taskName);
  task.setPriority(taskPriority);
  task.setDate(taskDate);
  task.setDescription(taskDescription);

  const savedProjects = JSON.parse(localStorage.getItem("projects"));
  for (let i = 0; i < savedProjects.length; i++) {
    if (savedProjects[i].name == originalProject.getName())
      savedProjects[i].tasks = originalProject.getTasksCopy();

    if (
      originalProject.getName() != newProject.getName() &&
      savedProjects[i].name == newProject.getName()
    )
      savedProjects[i].tasks = newProject.getTasksCopy();
  }
  localStorage.setItem("projects", JSON.stringify(savedProjects));
};

const checkTask = (taskName) => {
  const task = all
    .getOriginalTasks()
    .filter((task) => task.getName() == taskName)[0];
  const finished = task.changeState();

  if (finished) {
    uncompleted.deleteTask(task);
    completed.addTask(task);
  } else {
    completed.deleteTask(task);
    uncompleted.addTask(task);
  }

  const origProject = task.getProject();

  const savedProjects = JSON.parse(localStorage.getItem("projects"));
  for (let i = 0; i < savedProjects.length; i++) {
    if (savedProjects[i].name === origProject.getName())
      savedProjects[i].tasks.filter(
        (task) => task.name === taskName,
      )[0].finished = task.getState();
  }
  localStorage.setItem("projects", JSON.stringify(savedProjects));
};

const todayTasks = () => {
  const tasks = all
    .getOriginalTasks()
    .filter(
      (task) =>
        format(task.getDate(), "dd/MM/yyyy") ===
        format(new Date(), "dd/MM/yyyy"),
    );

  today.setTasks(tasks);

  return today.getTasksCopy();
};

const deleteTask = (taskName) => {
  const task = all
    .getOriginalTasks()
    .filter((task) => task.getName() === taskName)[0];
  const project = task.getProject();

  project.deleteTask(task);
  all.deleteTask(task);
  today.deleteTask(task);
  if (task.getState()) completed.deleteTask(task);
  else uncompleted.deleteTask(task);

  const savedProjects = JSON.parse(localStorage.getItem("projects"));
  for (let i = 0; i < savedProjects.length; i++) {
    if (savedProjects[i].name == project.getName())
      savedProjects[i].tasks = project.getTasksCopy();
  }
  localStorage.setItem("projects", JSON.stringify(savedProjects));
};

export {
  initTodo,
  createNewProject,
  deleteProject,
  editProject,
  getProjectsNames,
  getProjectTasks,
  getProjectDescription,
  createTask,
  editTask,
  checkTask,
  todayTasks,
  deleteTask,
};
