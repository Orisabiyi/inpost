import linkedin from "../assets/linkedin.svg";
import "../assets/fonts.css";
import FormSidebar from "../components/FormSidebar";
import { Link } from "react-router-dom";
import Main from "../components/Main";
import Section from "../components/Section";

function CreateAccount() {
  return (
    <Main>
      <FormSidebar>
        <>
          <span>Content</span>
          <span>made for</span>
          <span>you.</span>
        </>
      </FormSidebar>

      <Section>
        <h3
          className="flex flex-col text-32 leading-none translate-x-8"
          style={{ fontFamily: "Filson Pro", fontWeight: "500" }}
        >
          <span>Create a free account</span>
          <span>to explore a consistent</span>
          <span>Linkedin brand</span>
        </h3>

        <form
          method="post"
          className="flex flex-col items-stretch justify-center text-gray-600 w-11/12 mx-auto"
          style={{ fontFamily: "Filson Pro", fontWeight: "400" }}
        >
          <label htmlFor="email" className="text-16">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Username@example.com"
            className="border-2 bg-gray-200 rounded-full text-16 py-4 px-6 mt-3 mb-6 w-full outline-none"
          />

          <label htmlFor="password" className="text-16">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="***************"
            className="border-2 bg-gray-200 rounded-full text-16 py-4 px-6 mt-3 mb-6 w-full outline-none"
          />

          <button
            type="submit"
            className="bg-blue-400 text-white py-4 text-16 rounded-full mt-8"
          >
            Create an account
          </button>
        </form>

        <ul className="flex items-center gap-4 text-16 text-gray-400 w-11/12 mx-auto translate-x-8">
          <li className="w-1/3 h-[2px] bg-gray-400"></li>
          <li>Or continue with</li>
          <li className="w-1/3 h-[2px] bg-gray-400"></li>
        </ul>

        <ul className="grid grid-cols-2 gap-8 text-16 w-11/12 mx-auto">
          <button className="flex items-center justify-center gap-4 bg-gray-200 py-5 rounded-full">
            <img src={linkedin} alt="linked icon" className="w-5 h-5 block" />
            <p className="leading-none">LinkedIn</p>
          </button>

          <button className="flex items-center justify-center gap-4 bg-gray-200 py-5 rounded-full">
            <img src={linkedin} alt="linked icon" className="w-5 h-5 block" />
            <p className="leading-none">X (Twitter)</p>
          </button>

          <button className="flex items-center justify-center gap-4 bg-gray-200 py-5 rounded-full col-span-2">
            <img src={linkedin} alt="linked icon" className="w-5 h-5 block" />
            <p className="leading-none">Google</p>
          </button>
        </ul>

        <p className="text-16 w-11/12 mx-auto text-center mt-8">
          <Link to="/login">
            Already on inpost?{" "}
            <span className="font-semibold">Login your account</span>
          </Link>
        </p>
      </Section>
    </Main>
  );
}

export default CreateAccount;
