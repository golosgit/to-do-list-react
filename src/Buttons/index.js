import "./style.css";

const Buttons = ({ taskList, visibilityOfFinishedTasks, toggleVisibility }) =>
  taskList.length > 0 && (
    <>
        <button
          onClick={toggleVisibility} 
          className="buttons__button">{visibilityOfFinishedTasks ? "Ukryj" : "Pokaż"} ukończone
        </button>
        <button className="buttons__button" disabled={taskList.every(({ status }) => status)}>
          Ukończ wszystkie
        </button>
    </>
  );

export default Buttons;
