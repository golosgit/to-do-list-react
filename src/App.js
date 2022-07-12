import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";

function App() {
  const [taskList, setList] = useState([
    { id: 1, content: "Task 1", status: true },
    { id: 2, content: "Task 2", status: false },
  ]);

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

  return (
    <>
      <Header title="Lista zadań" />
      <div className="addTask">
        <Section title="Dodaj nowe zadanie" extraSectionContent={<Form />} />
      </div>
      <div className="taskList">
        <Section
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
      </div>
    </>
  );
}

export default App;
