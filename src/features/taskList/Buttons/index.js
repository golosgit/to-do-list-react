import { Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleVisibility, finishAllTasks } from "../taskListSlice";

export const Buttons = () => {
  const dispatch = useDispatch();
  const { taskList, visibilityOfFinishedTasks } = useSelector(selectTasks);
  
  return (
    taskList.length > 0 && (
      <>
        <Button
          onClick={() => dispatch(toggleVisibility())}
        >
          {visibilityOfFinishedTasks ? "Ukryj" : "Pokaż"}&nbsp;ukończone
        </Button>
        <Button
          onClick={() => dispatch(finishAllTasks())}
          disabled={taskList.every(({ status }) => status)}
        >
          Ukończ wszystkie
        </Button>
      </>
    )
  )
};

