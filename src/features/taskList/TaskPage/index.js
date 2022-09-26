import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Header } from "../../../common/Header";
import { Section } from "../../../common/Section";
import { Wrapper } from "../../../common/Wrapper/styled";
import { SectionContentWrapper } from "../../../common/SectionContentWrapper/styled";
import { getTaskById } from "../taskListSlice";

export const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, id));

  return (
    <Wrapper>
      <Header title="Szczegóły zadania"/>
      <Section 
        title={task ? task.content : "Błąd! Nie znaleziono zadania!"} 
        sectionContent={
          task ?
            <>
              <SectionContentWrapper>
                <p>
                  <strong>Status zadania: </strong>{task.status ? "Ukończono" : "Nie ukończono"}
                </p>          
              </SectionContentWrapper>
            </> :
            ""
        }
      />
    </Wrapper>
  );
};