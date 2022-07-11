import "./style.css";

const Section = ({ title, extraSectionButtons, extraSectionContent }) => (
  <section>
    <h2 className="section">
      {title}
      {extraSectionButtons}
    </h2>
    {extraSectionContent}
  </section>
);

export default Section;
