const localStorageKey = "taskList";

export const saveTaskListInLocalStorage = taskList => 
  localStorage.setItem(localStorageKey, JSON.stringify(taskList));

export const getTaskListFromLocalStorage = () => 
  JSON.parse(localStorage.getItem(localStorageKey)) || [];