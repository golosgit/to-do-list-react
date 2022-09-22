import { Form } from "./Form";
import { TaskList } from "./TaskList";
import { Buttons } from "./Buttons";
import { FetchButton } from "./FetchButton";
import { Section } from "../../common/Section";
import { Header } from "../../common/Header";
import { Wrapper } from "../styled";
import { Search } from "./Search";

export const Tasks = () => {
  return (
    <>
      <Wrapper>
        <Header title="Lista zadań" />
        <Section
          oneButton
          title="Dodaj nowe zadanie"
          extraSectionButtons={<FetchButton />}
          sectionContent={<Form />}
        />
        <Section
          title="Wyszukaj zadanie"
          sectionContent={<Search />}
        />
        <Section
          listSection
          title="Lista zadań"
          extraSectionButtons={<Buttons />}
          sectionContent={<TaskList />}
        />
      </Wrapper>
    </>
  );
};
