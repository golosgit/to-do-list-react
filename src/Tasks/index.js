import "./style.css";

const Tasks = ({ taskList, visibilityOfFinishedTasks, toggleTaskDone, removeTask }) => (
  <ul className="list">
    {taskList.map((task) => (
      <li key={task.id} className={`list__item ${task.status && !visibilityOfFinishedTasks ? "list__item--hidden" : ""}`}>
        <button 
          onClick={() => toggleTaskDone(task.id)} 
          className="list__button list__button--toggleTask"
        >
          {task.status ? "✓" : ""}
        </button>
        <span className={`${task.status ? "list__textLineThrough" : ""}`}>{task.content}</span>
        <button
          onClick={() => removeTask(task.id)}
          className="list__button list__button--remove"
        >🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
