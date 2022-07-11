import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";

const taskList = [
  { id: 1, content: "Task 1", status: true },
  { id: 2, content: "Task 2", status: false },
];

const visibilityOfFinishedTasks = true;

function App() {
  return (
    <>
      <Header title="Lista zadań"/>
      <div className="addTask">
        <Section 
          title="Dodaj nowe zadanie" 
          extraSectionContent={<Form />}
        />
      </div>
      <div className="taskList">
        <Section 
          title="Lista zadań" 
          extraSectionButtons={
            <Buttons 
              taskList={taskList} 
              visibilityOfFinishedTasks={visibilityOfFinishedTasks}
            />
          }
          extraSectionContent={
            <Tasks 
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
