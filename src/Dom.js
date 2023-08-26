import * as Todo from "./Todo.js";
import { format } from "date-fns";

let currentProject = undefined;
let navBarActiveElement = undefined;
let currentDate = undefined;

const setCurrentDate = () => {
  const headerDate = document.querySelector(".header-text > p:first-child");

  currentDate = new Date();
  headerDate.textContent = format(currentDate, "dd.MM.yyyy");
};

const setHeaderProjectTitle = () => {
  const headerProjectTitle = document.querySelector(
    ".project-section-wrapper > p",
  );
  headerProjectTitle.textContent = currentProject;
};

const setNavbar = () => {
  const navbar = document.querySelector(".navbar-projects");
  const projectSections = Todo.getProjectsNames();
  navbar.innerHTML = "";

  for (let project of projectSections) {
    const projectNavWrapper = document.createElement("div");
    projectNavWrapper.classList.add("project-nav-wrapper");

    const projectName = document.createElement("p");
    projectName.classList.add("tab");
    projectName.textContent = project;

    const signsWrapper = document.createElement("div");
    signsWrapper.classList.add("signs-wrapper");
    const editSign = document.createElement("i");
    editSign.setAttribute("class", "fa-solid fa-pen-to-square");
    signsWrapper.appendChild(editSign);
    const deleteSign = document.createElement("i");
    deleteSign.setAttribute("class", "fa-solid fa-trash");
    signsWrapper.appendChild(deleteSign);

    projectNavWrapper.appendChild(projectName);
    projectNavWrapper.appendChild(signsWrapper);

    projectNavWrapper.addEventListener("click", function () {
      if (navBarActiveElement !== undefined) {
        navBarActiveElement.classList.remove("active");
      }

      navBarActiveElement = this;
      navBarActiveElement.classList.add("active");
      currentProject = project;
      setHeaderProjectTitle();
      setTasks();
    });

    navbar.appendChild(projectNavWrapper);
  }
};

const setTasks = () => {
  if (currentProject === undefined) return;

  const main = document.querySelector(".main");
  main.innerHTML = "";

  const tasks = Todo.getProjectTasks(currentProject);

  for (let task of tasks) {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    const taskCheck = document.createElement("div");
    taskCheck.classList.add("task-check");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    taskCheck.appendChild(checkbox);

    const taskContent = document.createElement("div");
    taskContent.classList.add("task-content");

    const taskInfo = document.createElement("div");
    taskInfo.classList.add("task-info");
    taskContent.appendChild(taskInfo);
    const taskTitle = document.createElement("h3");
    taskTitle.classList.add("task-title");
    taskTitle.textContent = task.getName();
    taskInfo.appendChild(taskTitle);
    const taskDueDate = document.createElement("p");
    taskDueDate.classList.add("task-due-date");
    taskDueDate.textContent = format(task.getDate(), "dd.MM.yyyy");
    taskInfo.appendChild(taskDueDate);
    const taskPriority = document.createElement("p");
    taskPriority.classList.add("task-priority");
    taskPriority.textContent = `${task.getPriority()} priority`;
    taskInfo.appendChild(taskPriority);

    const editSign = document.createElement("i");
    editSign.setAttribute("class", "fa-solid fa-pen-to-square");
    taskContent.appendChild(editSign);
    const deleteSign = document.createElement("i");
    deleteSign.setAttribute("class", "fa-solid fa-trash");
    taskContent.appendChild(deleteSign);

    taskCard.appendChild(taskCheck);
    taskCard.appendChild(taskContent);

    main.appendChild(taskCard);
  }
};

const setMenuTaskOptions = () => {
  const projectsNames = Todo.getProjectsNames();

  const selectCreateMenu = document.querySelector("select#project");
  const selectEditMenu = document.querySelector("select#project-2");

  selectCreateMenu.innerHTML = "";
  selectEditMenu.innerHTML = "";

  for (let project of projectsNames) {
    const option = document.createElement("option");
    option.textContent = project;
    const optionCopy = option.cloneNode(true);

    selectCreateMenu.appendChild(option);
    selectEditMenu.appendChild(optionCopy);
  }
};

const setStaticButtonsListeners = () => {
  /* create task and project buttons*/
  const buttonCreateTask = document.querySelector(
    ".buttons button:first-child",
  );
  const buttonCreateProject = document.querySelector(
    ".buttons button:last-child",
  );

  buttonCreateTask.addEventListener("click", () => {
    const menuCreateTask = document.querySelector(".create-task");
    menuCreateTask.classList.add("active");
  });
  buttonCreateProject.addEventListener("click", () => {
    const menuCreateProject = document.querySelector(".create-project");
    menuCreateProject.classList.add("active");
  });

  /* edit and delete project buttons*/

  const buttonEditProjectMobile = document.querySelector(
    ".project-section-wrapper .signs-wrapper i:first-child",
  );
  const buttonDeleteProjectMobile = document.querySelector(
    ".project-section-wrapper .signs-wrapper i:last-child",
  );
  const buttonEditProjectDesktop = document.querySelector(
    ".project-nav-wrapper .signs-wrapper i:first-child",
  );
  const buttonDeleteProjectDesktop = document.querySelector(
    ".project-nav-wrapper .signs-wrapper i:last-child",
  );

  buttonEditProjectMobile.addEventListener("click", () => {
    const editProjectMenu = document.querySelector(".edit-project");
    editProjectMenu.classList.add("active");
  });
  buttonEditProjectDesktop.addEventListener("click", () => {
    const editProjectMenu = document.querySelector(".edit-project");
    editProjectMenu.classList.add("active");
  });

  buttonDeleteProjectMobile.addEventListener("click", () => {});
  buttonDeleteProjectDesktop.addEventListener("click", () => {});
};

const setCreateTaskListener = () => {
  const createTaskForm = document.querySelector(".create-task form");
  createTaskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let data = new FormData(event.target);
    data = Object.fromEntries(data.entries());

    Todo.createTask(
      data["project"].toLowerCase(),
      data["task-name"].toLowerCase(),
      data["priority"].toLowerCase(),
      new Date(data["date"]),
      data["description"].toLowerCase(),
    );

    if (currentProject === data["project"]) setTasks();
    this.reset();
  });

  const closeButton = document.querySelector(".create-task > i");
  closeButton.addEventListener("click", () => {
    document.querySelector(".create-task").classList.remove("active");
  });
};

const setCreateProjectListener = () => {
  const createProjectForm = document.querySelector(".create-project form");
  createProjectForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let data = new FormData(event.target);
    data = Object.fromEntries(data.entries());

    Todo.createNewProject(
      data["project-name"].toLowerCase(),
      data["description"].toLowerCase(),
    );

    setNavbar();
    setMenuTaskOptions();
    this.reset();
  });

  const closeButton = document.querySelector(".create-project > i");
  closeButton.addEventListener("click", () => {
    document.querySelector(".create-project").classList.remove("active");
  });
};

const initDom = () => {
  currentProject = "today";

  setCurrentDate();
  setNavbar();
  setTasks();
  setStaticButtonsListeners();
  setMenuTaskOptions();
  setCreateTaskListener();
  setCreateProjectListener();

  navBarActiveElement = document.querySelector(
    ".project-nav-wrapper:first-child",
  );
  navBarActiveElement.classList.add("active");
};

export { initDom };
