import { Form } from "./Form";
import { TaskList } from "./TaskList";
import { Buttons } from "./Buttons";
import { FetchButton } from "./FetchButton";
import { Section } from "../../common/Section";
import { Header } from "../../common/Header";
import { TaskListWrapper } from "./styled";

export const Tasks = () => {
  return (
    <>
      <TaskListWrapper>
        <Header title="Lista zadań" />
        <Section
          oneButton
          title="Dodaj nowe zadanie"
          extraSectionButtons={<FetchButton />}
          extraSectionContent={<Form />}
        />
        <Section 
        listSection 
        title="Lista zadań" 
        extraSectionButtons={<Buttons />} 
        extraSectionContent={<TaskList />} 
        />
      </TaskListWrapper>
    </>
  );
};
