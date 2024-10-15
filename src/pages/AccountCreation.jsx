import FormSidebar from "../components/FormSidebar";
import Main from "../components/Main";
import Section from "../components/Section";
import createIcon from "../assets/create.svg";

function AccountCreation() {
  return (
    <Main>
      <FormSidebar>
        <>
          <span>Account</span>
          <span>Creation</span>
          <span>credit.</span>
        </>
      </FormSidebar>

      <Section>
        <figure>
          <img src={createIcon} alt="icon for the creation of account" />
        </figure>
        <h1
          className="flex flex-col items-center text-32 leading-none"
          style={{ fontFamily: "Filson Pro", fontWeight: "500" }}
        >
          <span>Account creation</span>
          <span>completed</span>
        </h1>

        <p>
          We currently only support LinkedIn and X(Twitter) for now, update on
          other platform coming soon.
        </p>

        <button>Proceed to creation</button>
        <button>Purchase Credit</button>
      </Section>
    </Main>
  );
}

export default AccountCreation;
