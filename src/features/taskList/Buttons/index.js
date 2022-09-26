import { useSelector, useDispatch } from "react-redux";
import { Button } from "../styled";
import {
  toggleVisibility,
  finishAllTasks,
  selectVisibilityOfFinishedTasks,
  selectTaskListLength,
  selectIsEveryTaskDone,
  removeAllTasks,
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
          {visibilityOfFinishedTasks ? "Ukryj " : "Pokaż "}ukończone
        </Button>
        <Button onClick={() => dispatch(finishAllTasks())} disabled={isEveryTaskDone}>
          Ukończ wszystkie
        </Button>
        <Button onClick={() => dispatch(removeAllTasks())}>
          Usuń wszystkie
        </Button>
      </>
    )
  );
};
