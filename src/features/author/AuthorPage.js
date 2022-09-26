import { Header } from "../../common/Header";
import { Section } from "../../common/Section";
import { Wrapper } from "../../common/Wrapper/styled";
import { SectionContentWrapper } from "../../common/SectionContentWrapper/styled";

export const Author = () => {
  return (
    <Wrapper>
      <Header title="O autorze" />
      <Section
        title="Grzegorz Gołos"
        sectionContent={
          <SectionContentWrapper>
            <p>
              Zawsze miałem problemy z pisaniem tekstów, zatem będzie krótko. Jestem Grzesiek i obecnie pracuję jako
              metrolog w firmie produkującej zewnętrzne elementy karoserii samochodowych. Od około roku zastanawiam się
              nad zmianą branży, ale dopiero parę miesięcy temu podjąłem decyzję o spróbowaniu się we Frontendzie.
            </p>
            <p>
              W wolnych chwilach lubię słuchać muzyki (w szczególności ambient i jego pochodne). Pożeraczem czasu są
              również gry single player (w tym wypadku prym wiodą RPG-i), chociaż ostatnio do tego typu rozrywki ciągnie
              mnie coraz mniej.
            </p>
          </SectionContentWrapper>
        }
      />
    </Wrapper>
  );
};
