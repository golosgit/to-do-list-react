import "./style.css";

const Tasks = ({taskList, visibilityOfFinishedTasks}) => (
  <ul className="list">
    {taskList.map((task) => (
      <li key={task.id} className={`list__item ${task.status && !visibilityOfFinishedTasks ? "list__item--hidden" : ""}`}>
        <button className="list__button list__button--toggleTask">{task.status ? "✓" : ""}</button>
        <span className={`${task.status ? "list__textLineThrough" : ""}`}>{task.content}</span>
        <button className="list__button list__button--remove">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
