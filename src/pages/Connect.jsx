import Main from "../components/Main";
import Section from "../components/Section";
import linkedIn from "../assets/linkedin.svg";
import FormSidebar from "../components/FormSidebar";

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

        <ul className="text-16 w-3/4 flex flex-col items-stretch gap-8">
          <li className="flex flex-col gap-4 bg-gray-200 p-8 rounded-3xl">
            <div className="flex items-center justify-between">
              <img src={linkedIn} alt="the linkedIn icon" className="h-6 w-6" />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full">
                Connect
              </button>
            </div>

            <h4 className="font-semibold">Connect LinkedIn</h4>
            <p className="w-4/6 text-gray-600 text-14">
              We currently only support LinkedIn and X(Twitter) for now.
            </p>
          </li>

          <li className="flex flex-col gap-4 bg-gray-200 p-8 rounded-3xl">
            <div className="flex items-center justify-between">
              <img src={linkedIn} alt="the linkedIn icon" className="h-6 w-6" />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full">
                Connect
              </button>
            </div>

            <h4 className="font-semibold">Connect X(Twitter)</h4>
            <p className="w-4/6 text-gray-600 text-14">
              We currently only support LinkedIn and X(Twitter) for now
            </p>
          </li>

          <li className="text-center">
            <button className="bg-blue-600 text-white py-4 rounded-full w-full">
              Proceed
            </button>
          </li>
        </ul>

        <p className="text-16 text-gray-400 w-3/4">
          We currently only support LinkedIn and X(Twitter) for now, update on
          other platform coming soon
        </p>
      </Section>
    </Main>
  );
}

export default Connect;
