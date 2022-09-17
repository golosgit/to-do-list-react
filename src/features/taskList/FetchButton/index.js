import { useDispatch } from "react-redux";
import { fetchExampleTaskList } from "../taskListSlice";
import { Button } from "../styled";

export const FetchButton = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button onebutton onClick={() => dispatch(fetchExampleTaskList())}>
        Pobierz przykładowe zadania
      </Button>
    </>
  );
};