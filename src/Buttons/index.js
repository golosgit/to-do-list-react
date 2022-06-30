import "./style.css";

const Buttons = ({ taskList, visibilityOfFinishedTasks }) =>
  taskList.length > 0 && (
    <>
      <span className="buttons__gridElement">
        <button className="buttons__button">{visibilityOfFinishedTasks ? "Ukryj" : "Pokaż"} ukończone</button>
      </span>
      <span className="buttons__gridElement">
        <button className="buttons__button" disabled={taskList.every(({ status }) => status)}>
          Ukończ wszystkie
        </button>
      </span>
    </>
  );

export default Buttons;
