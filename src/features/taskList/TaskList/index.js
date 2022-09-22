import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { List, ListItem, Content, Button, StyledLink } from "./styled";
import { removeTask, toggleTaskDone, selectVisibilityOfFinishedTasks, selectTasksByQuery } from "../taskListSlice";
import searchQueryParamName from "../searchQueryParamName";

export const TaskList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

  const dispatch = useDispatch();
  const taskList = useSelector(state => selectTasksByQuery(state, query));
  const visibilityOfFinishedTasks = useSelector(selectVisibilityOfFinishedTasks);

  return (
    <List>
      {taskList.map((task) => (
        <ListItem key={task.id} hidden={task.status && !visibilityOfFinishedTasks}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))} toggleDone>
            {task.status ? "✓" : ""}
          </Button>
          <Content done={task.status}>
            <StyledLink to={`/zadanie/${task.id}`}>{task.content}</StyledLink>
          </Content>
          <Button onClick={() => dispatch(removeTask(task.id))} remove>
            🗑
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
