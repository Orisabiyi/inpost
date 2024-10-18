import FormSidebar from "../components/FormSidebar";
import Main from "../components/Main";
import Section from "../components/Section";

function Credit() {
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
          <span>Connect your social media</span>
          <span>accounts to inpost.</span>
        </h1>

        <ul className="text-16 w-3/4 flex flex-col items-stretch gap-8">
          <li className="flex flex-col gap-4 bg-gray-200 p-8 rounded-3xl border-2">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">
                <span>Starter </span>
                <span>50 Credits / 5000</span>
              </h4>

              <button className="bg-blue-600 text-white px-6 py-2 rounded-full">
                Buy Credit
              </button>
            </div>

            <p className="w-1/2 text-gray-600 text-14">
              We currently only support LinkedIn and X(Twitter) for now.
            </p>
          </li>

          <li className="flex flex-col gap-4 bg-gray-200 p-8 rounded-3xl border-2">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">
                <span>Starter </span>
                <span>50 Credits / 5000</span>
              </h4>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full">
                Buy Credit
              </button>
            </div>

            <p className="w-1/2 text-gray-600 text-14">
              We currently only support LinkedIn and X(Twitter) for now
            </p>
          </li>

          <li className="text-center">
            <button className="bg-blue-600 text-white py-4 rounded-full w-full">
              Proceed
            </button>
          </li>
        </ul>
      </Section>
    </Main>
  );
}

export default Credit;
