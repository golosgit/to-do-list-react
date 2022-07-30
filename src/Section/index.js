import "./style.css";

const Section = ({ className, title, extraSectionButtons, extraSectionContent }) => (
  <div className={className}>
    <section>
      <h2 className="section">
        {title}
        {extraSectionButtons}
      </h2>
      {extraSectionContent}
    </section>
  </div>
);

export default Section;
