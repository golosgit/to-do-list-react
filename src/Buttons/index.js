import { Button } from "./styled.js";

export const Buttons = ({ taskList, visibilityOfFinishedTasks, toggleVisibility, finishAllTasks }) => {
  taskList.length > 0 && (
    <>
      <Button 
        onClick={toggleVisibility}
      >
        {visibilityOfFinishedTasks ? "Ukryj" : "Pokaż"}&nbsp;ukończone
      </Button>
      <Button 
        onClick={finishAllTasks} 
        disabled={taskList.every(({ status }) => status)}
      >
        Ukończ wszystkie
      </Button>
    </>
  );
};
