import _ from "lodash";

export default function Project(name, description) {
  const tasks = [];

  const getName = () => name;
  const setName = (newName) => (name = newName);

  const getDescription = () => description;
  const setDescription = (newDescription) => (description = newDescription);

  const getTasksCopy = () => _.cloneDeep(tasks);

  const getTasksNames = () => tasks.map((task) => task.getName());

  const getTask = (taskName) =>
    tasks.filter((task) => task.getName() === taskName)[0];

  const addTask = (task) => tasks.push(task);

  const deleteTask = (taskName) => {
    const index = tasks.findIndex((task) => task.getName() === taskName);
    if (index != -1) tasks.splice(index, 1);
    console.log("task deleted");
  };

  const setTasks = (newTasks) => tasks.splice(0, tasks.length, ...newTasks);

  return {
    getName,
    setName,
    getDescription,
    setDescription,
    getTasksCopy,
    getTasksNames,
    getTask,
    addTask,
    deleteTask,
    setTasks,
  };
}
