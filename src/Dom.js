import * as Todo from "./Todo.js";
import { format } from "date-fns";

let currentProject = undefined;
let navBarActiveElement = undefined;
let currentDate = undefined;
let currentEditTaskName = undefined;

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

const setMenuTaskOptions = () => {
  const projectsNames = Todo.getProjectsNames();

  const selectCreateMenu = document.querySelector("select#project");
  const selectEditMenu = document.querySelector("select#project-2");

  selectCreateMenu.innerHTML = "";
  selectEditMenu.innerHTML = "";

  for (let project of projectsNames) {
    if (
      project != "uncompleted" &&
      project != "completed" &&
      project != "today"
    ) {
      const option = document.createElement("option");
      option.textContent = project;
      option.setAttribute("value", project);

      const optionCopy = option.cloneNode(true);

      selectCreateMenu.appendChild(option);
      selectEditMenu.appendChild(optionCopy);
    }
  }
};

const setNavbar = () => {
  const navbar = document.querySelector(".navbar-projects");
  const projectSections = Todo.getProjectsNames();
  navbar.innerHTML = "";
  setMenuTaskOptions();

  for (let project of projectSections) {
    const projectNavWrapper = document.createElement("div");
    projectNavWrapper.classList.add("project-nav-wrapper");

    if (navbar.childElementCount === 0) {
      projectNavWrapper.classList.add("active");
      navBarActiveElement = projectNavWrapper;
      currentProject = project;
      setHeaderProjectTitle();
    }

    const projectName = document.createElement("p");
    projectName.classList.add("tab");
    projectName.textContent = project;

    const signsWrapper = document.createElement("div");
    signsWrapper.classList.add("signs-wrapper");
    const editSign = document.createElement("i");
    editSign.setAttribute("class", "fa-solid fa-pen-to-square");
    editSign.addEventListener("click", (event) => {
      event.stopPropagation();
      const editProjectMenu = document.querySelector(".edit-project");
      editProjectMenu.classList.add("active");
      setEditProjectMenuContent(editProjectMenu);
    });
    signsWrapper.appendChild(editSign);
    const deleteSign = document.createElement("i");
    deleteSign.setAttribute("class", "fa-solid fa-trash");
    deleteSign.addEventListener("click", (event) => {
      event.stopPropagation();
      Todo.deleteProject(currentProject);
      setNavbar();
      setTasks();
    });
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

  let tasks = undefined;
  if (currentProject !== "today") tasks = Todo.getProjectTasks(currentProject);
  else tasks = Todo.todayTasks();

  for (let task of tasks) {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    if (task.getState()) taskCard.classList.add("done");

    const taskCheck = document.createElement("div");
    taskCheck.classList.add("task-check");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    if (task.getState()) checkbox.setAttribute("checked", "");
    checkbox.addEventListener("change", () => {
      taskCard.classList.toggle("done");
      Todo.checkTask(task.getName());
      setTasks();
    });
    taskCheck.appendChild(checkbox);

    const taskContent = document.createElement("div");
    taskContent.classList.add("task-content");

    const taskInfo = document.createElement("div");
    taskInfo.classList.add("task-info");
    taskInfo.addEventListener("click", () => {
      const taskDetails = document.querySelector(".task-details-info");
      setTaskDetailsContent(task);
      taskDetails.classList.add("active");
    });
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
    editSign.addEventListener("click", () => {
      const editTaskMenu = document.querySelector(".edit-task");
      editTaskMenu.classList.add("active");
      setEditTaskMenuContent(editTaskMenu, task);
      currentEditTaskName = task.getName();
    });
    taskContent.appendChild(editSign);
    const deleteSign = document.createElement("i");
    deleteSign.setAttribute("class", "fa-solid fa-trash");
    deleteSign.addEventListener("click", () => {
      Todo.deleteTask(task.getName());
      setTasks();
    });
    taskContent.appendChild(deleteSign);

    taskCard.appendChild(taskCheck);
    taskCard.appendChild(taskContent);

    main.appendChild(taskCard);
  }
};

const setEditProjectMenuContent = (editProjectMenu) => {
  const name = editProjectMenu.querySelector("input#project-name");
  name.value = currentProject;

  const description = editProjectMenu.querySelector("textarea#description");
  description.value = Todo.getProjectDescription(currentProject);
};

const setEditTaskMenuContent = (editTaskMenu, task) => {
  const project = editTaskMenu.querySelector(
    `select#project-2 option[value="${task.getProject().getName()}"]`,
  );

  if (project != null) project.setAttribute("selected", "");

  const name = editTaskMenu.querySelector("input#task-name");
  name.value = task.getName();

  const priority = editTaskMenu.querySelector(
    `input[value=${task.getPriority()}]`,
  );
  priority.setAttribute("checked", "");

  const date = editTaskMenu.querySelector("input#date");
  date.value =
    format(task.getDate(), "yyyy-MM-dd") +
    "T" +
    format(task.getDate(), "HH:mm");

  const description = editTaskMenu.querySelector("textarea#description");
  description.value = task.getDescription();
};

const setTaskDetailsContent = (task) => {
  const title = document.querySelector(".task-details-info > h2");
  title.textContent = task.getName();

  const date = document.querySelector(".details-date > p");
  date.textContent = format(task.getDate(), "dd.MM.yyyy");

  const project = document.querySelector(".details-project > p");
  project.textContent = currentProject;

  const priority = document.querySelector(".details-priority > p");
  priority.textContent = task.getPriority();

  const description = document.querySelector(".details-description > p");
  description.textContent = task.getDescription();
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

  /* edit and delete project buttons in the mobile layout*/

  const buttonEditProjectMobile = document.querySelector(
    ".project-section-wrapper .signs-wrapper i:first-child",
  );
  const buttonDeleteProjectMobile = document.querySelector(
    ".project-section-wrapper .signs-wrapper i:last-child",
  );

  buttonEditProjectMobile.addEventListener("click", () => {
    const editProjectMenu = document.querySelector(".edit-project");
    editProjectMenu.classList.add("active");
    setEditProjectMenuContent(editProjectMenu);
  });
  buttonDeleteProjectMobile.addEventListener("click", () => {
    Todo.deleteProject(currentProject);
    setNavbar();
    setTasks();
  });

  /* close menu buttons */

  const taskDetailsInfo = document.querySelector(".task-details-info");
  taskDetailsInfo.firstElementChild.addEventListener("click", () =>
    taskDetailsInfo.classList.remove("active"),
  );

  const createTaskMenu = document.querySelector(".create-task");
  createTaskMenu.firstElementChild.addEventListener("click", () => {
    createTaskMenu.classList.remove("active");
    createTaskMenu.querySelector("form").reset();
  });

  const createProjectMenu = document.querySelector(".create-project");
  createProjectMenu.firstElementChild.addEventListener("click", () => {
    createProjectMenu.classList.remove("active");
    createProjectMenu.querySelector("form").reset();
  });

  const editProjectMenu = document.querySelector(".edit-project");
  editProjectMenu.firstElementChild.addEventListener("click", () => {
    editProjectMenu.classList.remove("active");
  });

  const editTaskMenu = document.querySelector(".edit-task");
  editTaskMenu.firstElementChild.addEventListener("click", () => {
    editTaskMenu.classList.remove("active");
  });
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

    setTasks();
    this.reset();
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
    this.reset();
  });
};

const setEditProjectListener = () => {
  const editProjectForm = document.querySelector(".edit-project form");
  editProjectForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let data = new FormData(event.target);
    data = Object.fromEntries(data.entries());

    Todo.editProject(currentProject, data["project-name"], data["description"]);

    currentProject = data["project-name"];

    setNavbar();
    document.querySelector(".edit-project").classList.remove("active");
  });
};

const setEditTaskListener = () => {
  const editTaskForm = document.querySelector(".edit-task form");
  editTaskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let data = new FormData(event.target);
    data = Object.fromEntries(data.entries());

    // TODO it's bad to send currentProject
    Todo.editTask(
      currentEditTaskName,
      data["project"],
      data["task-name"],
      data["priority"],
      new Date(data["date"]),
      data["description"],
    );

    setTasks();
    document.querySelector(".edit-task").classList.remove("active");
  });
};

const initDom = () => {
  setCurrentDate();
  setNavbar();
  setTasks();
  setStaticButtonsListeners();
  setMenuTaskOptions();
  setCreateTaskListener();
  setCreateProjectListener();
  setEditProjectListener();
  setEditTaskListener();
};

export { initDom };
