import { useSelector, useDispatch } from "react-redux";
import { List, ListItem, Content, Button } from "./styled";
import { 
  removeTask, 
  selectTaskList, 
  toggleTaskDone, 
  selectVisibilityOfFinishedTasks 
} from "../taskListSlice";

export const TaskList = () => {
  const dispatch = useDispatch();
  const taskList = useSelector(selectTaskList);
  const visibilityOfFinishedTasks = useSelector(selectVisibilityOfFinishedTasks);

  return (
    <List>
      {taskList.map((task) => (
        <ListItem key={task.id} hidden={task.status && !visibilityOfFinishedTasks}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))} toggleDone>
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
