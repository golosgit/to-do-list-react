import { Content, StyledSection } from "./styled";

export const Section = ({ oneButton, listSection, title, extraSectionButtons, sectionContent }) => (
  <StyledSection listSection={listSection}>
    <Content oneButton={oneButton}>
      {title}
      {extraSectionButtons}
    </Content>
    {sectionContent}
  </StyledSection>
);
