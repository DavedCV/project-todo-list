import _ from "lodash";

export default function Project(name, description, tasks = []) {
  const toJSON = () => {
    return {
      name,
      description,
      tasks,
    };
  };

  const getName = () => name;
  const setName = (newName) => (name = newName);

  const getDescription = () => description;
  const setDescription = (newDescription) => (description = newDescription);

  const setTasks = (newTasks) => tasks.splice(0, tasks.length, ...newTasks);
  const getTasksCopy = () => _.cloneDeep(tasks);
  const getOriginalTasks = () => tasks;
  const getTasksNames = () => tasks.map((task) => task.getName());
  const getTask = (taskName) =>
    tasks.filter((task) => task.getName() === taskName)[0];
  const addTask = (task) => {
    if (
      tasks.filter(
        (taskElement) => (taskElement.getName() === task.getName())).length == 0
    )
      tasks.push(task);
  };
  const deleteTask = (task) => {
    const index = tasks.findIndex((taskItem) => taskItem === task);
    if (index != -1) tasks.splice(index, 1);
  };

  return {
    getName,
    setName,
    getDescription,
    setDescription,
    getTasksCopy,
    getOriginalTasks,
    getTasksNames,
    getTask,
    addTask,
    deleteTask,
    setTasks,
    toJSON,
  };
}
