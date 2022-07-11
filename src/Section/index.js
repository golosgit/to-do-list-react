import "./style.css";

const SecondaryHeader = ({ title, extraSectionButtons, extraSectionContent }) => (
  <section>
    <h2 className="secondaryHeader">
      {title}
      {extraSectionButtons}
    </h2>
    {extraSectionContent}
  </section>
);

export default SecondaryHeader;
