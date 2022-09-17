import { Button } from "../styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleVisibility,
  finishAllTasks,
  selectVisibilityOfFinishedTasks,
  selectTaskListLength,
  selectIsEveryTaskDone,
} from "../taskListSlice";

export const Buttons = () => {
  const dispatch = useDispatch();
  const visibilityOfFinishedTasks = useSelector(selectVisibilityOfFinishedTasks);
  const taskListLength = useSelector(selectTaskListLength);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

  return (
    taskListLength > 0 && (
      <>
        <Button onClick={() => dispatch(toggleVisibility())}>
          {visibilityOfFinishedTasks ? "Ukryj" : "Pokaż"}&nbsp;ukończone
        </Button>
        <Button onClick={() => dispatch(finishAllTasks())} disabled={isEveryTaskDone}>
          Ukończ wszystkie
        </Button>
      </>
    )
  );
};
