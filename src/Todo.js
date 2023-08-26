import Project from "./Project.js";
import Task from "./Task.js";

let projects = [];

const initTodo = () => {
  const today = Project(
    "today",
    "project section where task with date equals to the system date are bundled",
  );

  const all = Project("all", "project section where all task are bundled");

  const completed = Project(
    "completed",
    "project section where all task completed are bundled",
  );

  const uncompleted = Project(
    "uncompleted",
    "project section where all task uncompleted are bundled",
  );

  const defaultTask = Task(
    "Welcome",
    "high",
    new Date(),
    "Welcome to 'Todo List', start creating task and projects, and get ready to be productive!",
  );
  all.addTask(defaultTask);

  projects = [today, all, completed, uncompleted];
};

/* projects api --------------------------------------------------------------*/

const createNewProject = (name, description) =>
  projects.push(Project(name, description));

const deleteProject = (name) => {
  const index = projects.findIndex((project) => project.getName() === name);
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
  project.addTask(Task(taskName, taskPriority, taskDate, taskDescription));
};

const editTask = (
  projectName,
  originalTaskName,
  taskName,
  taskPriority,
  taskDate,
  taskDescription,
) => {
  const project = projects.filter(
    (project) => project.getName() === projectName,
  );
  const task = project.getTask(originalTaskName);

  task.setName(taskName);
  task.setPriority(taskPriority);
  task.setDate(taskDate);
  task.setDescription(taskDescription);
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
};
