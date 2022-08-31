import { useState } from "react";
import { Form } from "./Form";
import { TaskList } from "./TaskList";
import { Buttons } from "./Buttons";
import { Section } from "../../common/Section";
import { Header } from "../../common/Header";
import { useTasks } from "../../useTasks";

function Tasks() {
  const [visibilityOfFinishedTasks, setVisibility] = useState(true);

  const toggleVisibility = () => {
    setVisibility((visibilityOfFinishedTasks) => !visibilityOfFinishedTasks);
  };

  const { taskList, toggleTaskDone, removeTask, finishAllTasks, addNewTask } = useTasks();

  return (
    <>
      <Header title="Lista zadań" />
      <Section 
        title="Dodaj nowe zadanie" 
        extraSectionContent={<Form addNewTask={addNewTask} />} />
      <Section
        listSection
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
          <TaskList
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

export default Tasks;
