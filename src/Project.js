export default function Project(name, description) {
  const tasks = [];

  const getName = () => name;
  const setName = (newName) => (name = newName);

  const getDescription = () => description;
  const setDescription = (newDescription) => (description = newDescription);

  const getTasksNames = () => tasks.map((task) => task.name);

  const getTask = (taskName) => tasks.filter((task) => task.name === taskName)[0];

  const addTask = (task) => tasks.push(task);

  const deleteTask = (taskName) => {
    const index = tasks.findIndex((task) => task.name === taskName);
    tasks.splice(index, 1);
  };

  return {
    getName,
    setName,
    getDescription,
    setDescription,
    getTasksNames,
    getTask,
    addTask,
    deleteTask,
  };
}