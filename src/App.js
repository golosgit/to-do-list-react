import { useState, useEffect } from "react";
import Form from "./Form";
import { Tasks } from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import { Header } from "./Header";

function App() {
  const [taskList, setList] = useState(
    JSON.parse(localStorage.getItem("taskList")) ? 
    JSON.parse(localStorage.getItem("taskList")) : []
  );

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  const [visibilityOfFinishedTasks, setVisibility] = useState(true);

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

  const toggleVisibility = () => {
    setVisibility((visibilityOfFinishedTasks) => !visibilityOfFinishedTasks);
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

  return (
    <>
      <Header title="Lista zadań" />
      <Section className="addTask" title="Dodaj nowe zadanie" extraSectionContent={<Form addNewTask={addNewTask} />} />
      <Section
        className="taskList"
        title="Lista zadań"
        extraSectionButtons={
          <Buttons
            taskList={taskList}
            visibilityOfFinishedTasks={visibilityOfFinishedTasks}
            toggleVisibility={toggleVisibility}
            finishAllTasks={finishAllTasks}
          />
        }
        extraSectionContent={
          <Tasks
            toggleTaskDone={toggleTaskDone}
            removeTask={removeTask}
            taskList={taskList}
            visibilityOfFinishedTasks={visibilityOfFinishedTasks}
          />
        }
      />
    </>
  );
}

export default App;
