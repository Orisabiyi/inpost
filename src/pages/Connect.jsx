import Main from "../components/Main";
import Section from "../components/Section";

function Connect() {
  return (
    <Main>
      <FormSidebar>
        <>
          <span>Connect</span>
          <span>your social</span>
          <span>accounts</span>
        </>
      </FormSidebar>

      <Section>
        <h1
          className="flex flex-col text-32 leading-none"
          style={{ fontFamily: "Filson Pro", fontWeight: "500" }}
        >
          <span>Connect your social media</span>
          <span>accounts to inpost.</span>
        </h1>

        <ul>
          <li>
            <div></div>

            <h4>Connect LinkedIn</h4>
            <p>We currently only support LinkedIn and X(Twitter) for now</p>
          </li>

          <li>
            <div></div>

            <h4>Connect X(Twitter)</h4>
            <p>We currently only support LinkedIn and X(Twitter) for now</p>
          </li>

          <li>
            <button>Proceed</button>
          </li>
        </ul>

        <p>
          We currently only support LinkedIn and X(Twitter) for now, update on
          other platform coming soon
        </p>
      </Section>
    </Main>
  );
}

export default Connect;
