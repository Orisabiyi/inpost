import FormSidebar from "../components/FormSidebar";
import Main from "../components/Main";
import Section from "../components/Section";

function CreditForm() {
  return (
    <Main>
      <FormSidebar>
        <>
          <span>Purchase</span>
          <span>Creation</span>
          <span>credit.</span>
        </>
      </FormSidebar>

      <Section>
        <h1
          className="flex flex-col text-32 leading-none"
          style={{ fontFamily: "Filson Pro", fontWeight: "500" }}
        >
          <span>Buy the starter</span>
          <span>plan now</span>
        </h1>

        <form action="">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="" />
        </form>
      </Section>
    </Main>
  );
}

export default CreditForm;
