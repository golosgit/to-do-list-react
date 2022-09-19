import { Header } from "../../common/Header";
import { Section } from "../../common/Section";
import { SectionContentWrapper, Wrapper } from "../styled";

export const Author = () => {
  return (
    <Wrapper>
      <Header title="O autorze" />
      <Section
        title="Grzegorz Gołos"
        extraSectionContent={
          <>
            <SectionContentWrapper>
              <p>
                Zawsze miałem problemy z pisaniem tekstów, zatem będzie krótko. Jestem Grzesiek i obecnie pracuję jako
                metrolog w firmie produkującej zewnętrzne elementy karoserii samochodowych. Od około roku zastanawiam
                się nad zmianą branży, ale dopiero parę miesięcy temu podjąłem decyzję o spróbowaniu się we Frontendzie.
              </p>
              <p>
                W wolnych chwilach lubię słuchać muzyki (w szczególności ambient). Pożeraczem czasu są również gry
                single player, chociaż ostatnio do tego typu rozrywki ciągnie mnie coraz mniej.
              </p>
            </SectionContentWrapper>
          </>
        }
      />
    </Wrapper>
  );
};
