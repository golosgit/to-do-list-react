export const getExampleTaskList = async () => {
  const response = await fetch("/to-do-list-react/exampleTaskList.json");

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
