import { Content, StyledSection } from "./styled";

export const Section = ({ listSection, title, extraSectionButtons, extraSectionContent }) => (
  <StyledSection listSection={listSection}>
    <Content>
      {title}
      {extraSectionButtons}
    </Content>
    {extraSectionContent}
  </StyledSection>
);
