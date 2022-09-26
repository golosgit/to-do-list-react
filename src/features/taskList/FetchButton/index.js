import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTaskList, selectLoadingState } from "../taskListSlice";
import { Button } from "../../../common/Button/styled";

export const FetchButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingState);

  return (
    <>
      <Button 
        onebutton 
        disabled={loading} 
        onClick={() => dispatch(fetchExampleTaskList())}
      >
        {
          loading ? "Ładowanie..." : "Pobierz przykładowe zadania"
        }
      </Button>
    </>
  );
};