import Main from "../components/Main";
import Section from "../components/Section";

function Connect() {
  return (
    <Main>
      <Section>
        <h1
          className="flex flex-col text-32 leading-none"
          style={{ fontFamily: "Filson Pro", fontWeight: "500" }}
        >
          <span>Connect</span>
          <span>your social</span>
          <span>accounts</span>
        </h1>
      </Section>
    </Main>
  );
}

export default Connect;
