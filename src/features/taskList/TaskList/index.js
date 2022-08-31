import { List, ListItem, Content, Button } from "./styled";

export const TaskList = ({ taskList, visibilityOfFinishedTasks, toggleTaskDone, removeTask }) => (
  <List>
    {taskList.map((task) => (
      <ListItem key={task.id} hidden={task.status && !visibilityOfFinishedTasks}>
        <Button onClick={() => toggleTaskDone(task.id)} toggleDone>
          {task.status ? "✓" : ""}
        </Button>
        <Content done={task.status}>{task.content}</Content>
        <Button onClick={() => removeTask(task.id)} remove>
          🗑
        </Button>
      </ListItem>
    ))}
  </List>
);
