import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import SecondaryHeader from "./SecondaryHeader";
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
        <SecondaryHeader 
          title="Dodaj nowe zadanie" 
          extraHeaderContent={<Form />}
        />
      </div>
      <div className="taskList">
        <SecondaryHeader 
          title="Lista zadań" 
          extraHeaderButtons={
            <Buttons 
              taskList={taskList} 
              visibilityOfFinishedTasks={visibilityOfFinishedTasks}
            />
          }
          extraHeaderContent={
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
