import "./style.css";

const SecondaryHeader = ({ title, extraHeaderButtons, extraHeaderContent }) => (
  <section>
    <h2 className="secondaryHeader">
      {title}
      {extraHeaderButtons}
    </h2>
    {extraHeaderContent}
  </section>
);

export default SecondaryHeader;
