export default function Task(name, priority, date, description) {
  const getName = () => name;
  const setName = (newName) => (name = newName);

  const getPriority = () => name;
  const setPriority = (newPriority) => (priority = newPriority);

  const getDate = () => date;
  const setDate = (newDate) => (date = newDate);

  const getDescription = () => description;
  const setDescription = (newDescription) => (description = newDescription);

  return {
    getName,
    setName,
    getPriority,
    setPriority,
    getDate,
    setDate,
    getDescription,
    setDescription,
  };
};
