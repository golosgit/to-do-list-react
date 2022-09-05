import { Form } from "./Form";
import { TaskList } from "./TaskList";
import { Buttons } from "./Buttons";
import { Section } from "../../common/Section";
import { Header } from "../../common/Header";

function Tasks() {
  return (
    <>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        extraSectionContent={<Form />}
      />
      <Section
        listSection
        title="Lista zadań"
        extraSectionButtons={<Buttons />}
        extraSectionContent={<TaskList />}
      />
    </>
  )
}

export default Tasks;