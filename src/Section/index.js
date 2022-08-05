import { Content, StyledSection } from "./styled.js";

export const Section = ({ listSection, title, extraSectionButtons, extraSectionContent }) => (
  <StyledSection listSection={listSection}>
    <section>
      <Content>
        {title}
        {extraSectionButtons}
      </Content>
      {extraSectionContent}
    </section>
  </StyledSection>
);
