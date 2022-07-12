import "./style.css";

const Buttons = ({ taskList, visibilityOfFinishedTasks, toggleVisibility, finishAllTasks }) =>
  taskList.length > 0 && (
    <>
      <button 
        onClick={toggleVisibility} 
        className="buttons__button"
      >
        {visibilityOfFinishedTasks ? "Ukryj" : "Pokaż"} ukończone
      </button>
      <button 
        onClick={finishAllTasks} 
        className="buttons__button" 
        disabled={taskList.every(({ status }) => status)}
      >
        Ukończ wszystkie
      </button>
    </>
  );

export default Buttons;
