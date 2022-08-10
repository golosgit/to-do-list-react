import { useState, useEffect } from "react";

export const useTasks = () => {
  const [taskList, setList] = useState(
    JSON.parse(localStorage.getItem("taskList")) ? 
    JSON.parse(localStorage.getItem("taskList")) : []
  );

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  const toggleTaskDone = (id) => {
    setList((taskList) =>
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, status: !task.status };
        }
        return task;
      })
    );
  };

  const removeTask = (id) => {
    setList((taskList) => taskList.filter((task) => task.id !== id));
  };

  const finishAllTasks = () => {
    setList((taskList) => taskList.map((task) => ({ ...task, status: true })));
  };

  const addNewTask = (newTaskContent) => {
    if (newTaskContent) {
      setList((taskList) => [
        ...taskList,
        {
          id: taskList.length ? taskList[taskList.length - 1].id + 1 : 1,
          content: newTaskContent,
          status: false,
        },
      ]);
    }
  };

  return { taskList, toggleTaskDone, removeTask, finishAllTasks, addNewTask };
};
