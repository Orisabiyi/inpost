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
        <figure className="self-center">
          <img src={createIcon} alt="icon for the creation of account" />
        </figure>
        <h1
          className="flex flex-col items-center text-32 leading-none self-center"
          style={{ fontFamily: "Filson Pro", fontWeight: "500" }}
        >
          <span>Account creation</span>
          <span>completed</span>
        </h1>

        <p className="self-center text-16 text-center w-4/5 text-gray-400">
          We currently only support LinkedIn and X(Twitter) for now, update on
          other platform coming soon.
        </p>

        <button className="bg-blue-400 text-16 text-white py-4 rounded-full">
          Proceed with creation
        </button>

        <button className="bg-gray-400 text-16 text-white py-4 rounded-full">
          Purchase Credit
        </button>
      </Section>
    </Main>
  );
}

export default AccountCreation;
