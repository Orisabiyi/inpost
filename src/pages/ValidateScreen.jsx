import FormSidebar from "../components/FormSidebar";
import Main from "../components/Main";
import Section from "../components/Section";

function ValidateScreen() {
  return (
    <Main>
      <FormSidebar>
        <>
          <span>Verify that</span>
          <span>its you for</span>
          <span>real😂</span>
        </>
      </FormSidebar>

      <Section>
        <h3
          className="flex flex-col text-32 leading-none"
          style={{ fontFamily: "Filson Pro", fontWeight: "500" }}
        >
          <span>Verify your</span>
          <span>email address</span>
        </h3>

        <p className="text-16 flex flex-col items-start justify-center">
          <span>We just sent a mail to info***********@gmail.com,</span>
          <span>containing your OTP code.</span>
        </p>

        <form
          action=""
          className="flex flex-col items-stretch justify-center gap-8 text-gray-600 w-fit"
        >
          <div className="flex items-center gap-3">
            <input
              type="number"
              name="otp"
              className="w-24 h-40 bg-gray-200 bg-opacity-60 border-opacity-60 outline-none border-gray-400 border-2 rounded-full text-32 text-center focus:border-blue-600 focus:border-[1px]"
            />
            <input
              type="number"
              name="otp"
              className="w-24 h-40 bg-gray-200 bg-opacity-60 border-opacity-60 outline-none border-gray-400 border-2 rounded-full text-32 text-center focus:border-blue-600 focus:border-[1px]"
            />
            <input
              type="number"
              name="otp"
              className="w-24 h-40 bg-gray-200 bg-opacity-60 border-opacity-60 outline-none border-gray-400 border-2 rounded-full text-32 text-center focus:border-blue-600 focus:border-[1px]"
            />
            <input
              type="number"
              name="otp"
              className="w-24 h-40 bg-gray-200 bg-opacity-60 border-opacity-60 outline-none border-gray-400 border-2 rounded-full text-32 text-center focus:border-blue-600 focus:border-[1px]"
            />
            <input
              type="number"
              name="otp"
              className="w-24 h-40 bg-gray-200 bg-opacity-60 border-opacity-60 outline-none border-gray-400 border-2 rounded-full text-32 text-center focus:border-blue-600 focus:border-[1px]"
            />
            <input
              type="number"
              name="otp"
              className="w-24 h-40 bg-gray-200 bg-opacity-60 border-opacity-60 outline-none border-gray-400 border-2 rounded-full text-32 text-center focus:border-blue-600 focus:border-[1px]"
            />
          </div>

          <p className="text-left text-gray-300 text-16">
            <b className="text-gray-600">0:45 </b>
            Didn't get the code? <b className="text-gray-400">Resend now</b>
          </p>

          <button
            type="submit"
            className="bg-blue-600 w-full text-white text-16 py-4 rounded-full mt-10"
          >
            Login
          </button>

          <p className="text-center text-16">Change Email address</p>
        </form>
      </Section>
    </Main>
  );
}

export default ValidateScreen;
