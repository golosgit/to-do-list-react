import { Content, StyledSection } from "./styled";

export const Section = ({ oneButton, listSection, title, extraSectionButtons, extraSectionContent }) => (
  <StyledSection listSection={listSection}>
    <Content oneButton={oneButton}>
      {title}
      {extraSectionButtons}
    </Content>
    {extraSectionContent}
  </StyledSection>
);
