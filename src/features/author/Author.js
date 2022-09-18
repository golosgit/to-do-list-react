import { Header } from "../../common/Header";
import { Section } from "../../common/Section";
import { Wrapper } from "../styled";

export const Author = () => {
  return (
    <Wrapper>
      <Header title="O autorze" />
      <Section 
        title="Grzegorz Gołos" 
        extraSectionContent={<>test</>} 
      />
    </Wrapper>
  );
};
