import { useSelector, useDispatch } from "react-redux";
import { List, ListItem, Content, Button } from "./styled";
import { removeTask, selectTasks, toggleTaskDone } from "../taskListSlice";

export const TaskList = () => {
  const { taskList, visibilityOfFinishedTasks } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <List>
      {taskList.map((task) => (
        <ListItem key={task.id} hidden={task.status && !visibilityOfFinishedTasks}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))} toggleDone>
            {console.log(task.status)}
            {task.status ? "✓" : ""}
          </Button>
          <Content done={task.status}>{task.content}</Content>
          <Button onClick={() => dispatch(removeTask(task.id))} remove>
            🗑
          </Button>
        </ListItem>
      ))}
    </List>
  );
}
