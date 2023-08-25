export default function Task(name, priority, date, description) {
  let finished = false;

  const getName = () => name;
  const setName = (newName) => (name = newName);

  const getPriority = () => priority;
  const setPriority = (newPriority) => (priority = newPriority);

  const getDate = () => date;
  const setDate = (newDate) => (date = newDate);

  const getDescription = () => description;
  const setDescription = (newDescription) => (description = newDescription);

  const changeState = () => (finished = finished ? false : true);

  return {
    getName,
    setName,
    getPriority,
    setPriority,
    getDate,
    setDate,
    getDescription,
    setDescription,
    changeState,
  };
}
