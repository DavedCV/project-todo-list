export default function Task(
  name,
  priority,
  date,
  description,
  project,
  finished = false,
) {
  const toJSON = () => {
    return {
      name,
      priority,
      date,
      description,
      finished,
    };
  };

  const getName = () => name;
  const setName = (newName) => (name = newName);

  const getPriority = () => priority;
  const setPriority = (newPriority) => (priority = newPriority);

  const getDate = () => date;
  const setDate = (newDate) => (date = newDate);

  const getDescription = () => description;
  const setDescription = (newDescription) => (description = newDescription);

  const getProject = () => project;
  const setProject = (newProject) => (project = newProject);

  const changeState = () => (finished = finished ? false : true);
  const getState = () => finished;

  return {
    getName,
    setName,
    getPriority,
    setPriority,
    getDate,
    setDate,
    getDescription,
    setDescription,
    getProject,
    setProject,
    changeState,
    getState,
    toJSON,
  };
}
