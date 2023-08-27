import { format } from "date-fns";
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
  uncompleted.addTask(defaultTask);
  today.addTask(defaultTask);

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
  const uncompleted = projects.filter(
    (project) => project.getName() === "uncompleted",
  )[0];
  const all = projects.filter((project) => project.getName() === "all")[0];

  const newTask = Task(taskName, taskPriority, taskDate, taskDescription);
  project.addTask(newTask);
  uncompleted.addTask(newTask);
  all.addTask(newTask);
};

const editTask = (
  originalProjectName,
  originalTaskName,
  taskProject,
  taskName,
  taskPriority,
  taskDate,
  taskDescription,
) => {
  const project = projects.filter(
    (project) => project.getName() === originalProjectName,
  )[0];
  const task = project.getTask(originalTaskName);

  if (originalProjectName !== taskProject) {
    const project2 = projects.filter(
      (project) => project.getName() === taskProject,
    )[0];
    project.deleteTask(originalTaskName);
    project2.addTask(task);
  }

  task.setName(taskName);
  task.setPriority(taskPriority);
  task.setDate(taskDate);
  task.setDescription(taskDescription);
};

const checkTask = (projectName, taskName) => {
  const project = projects.filter(
    (project) => project.getName() === projectName,
  )[0];
  const completed = projects.filter(
    (project) => project.getName() === "completed",
  )[0];
  const uncompleted = projects.filter(
    (project) => project.getName() === "uncompleted",
  )[0];

  const task = project.getTask(taskName);
  const finished = task.changeState();

  if (finished) {
    uncompleted.deleteTask(taskName);
    completed.addTask(task);
  } else {
    completed.deleteTask(taskName);
    uncompleted.addTask(task);
  }
};

const todayTasks = () => {
  const all = projects.filter((project) => project.getName() === "all")[0];

  const todayTasks = all
    .getTasksCopy()
    .filter(
      (task) =>
        format(task.getDate(), "dd/MM/yyyy") ===
        format(new Date(), "dd/MM/yyyy"),
    );

  const today = projects.filter((project) => project.getName() === "today")[0];
  today.setTasks(todayTasks);

  return todayTasks;
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
};
