import linkedin from "../assets/linkedin.svg";
import "../assets/fonts.css";
import FormSidebar from "../components/FormSidebar";
import { Link } from "react-router-dom";
import { useState } from "react";
import Main from "../components/Main";
import Section from "../components/Section";

function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!mail) setError(true);
    setTimeout(() => setError(false), 4000);
  };

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
          className="flex flex-col text-32 leading-none"
          style={{ fontFamily: "Filson Pro", fontWeight: "500" }}
        >
          <span>Login to your</span>
          <span>impost account</span>
        </h3>

        <form
          method="post"
          className="flex flex-col items-stretch justify-center text-gray-600 w-full"
          style={{ fontFamily: "Filson Pro", fontWeight: "400" }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" className="text-16">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Username@example.com"
            className="border-2 bg-gray-200 rounded-full text-16 py-4 px-6 mt-3 mb-4 outline-none"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          {error && (
            <p className="text-red-warning text-12 mb-6">
              This email address is not in our system, please create an account
            </p>
          )}

          <label htmlFor="password" className="text-16">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="***************"
            className="border-2 w-full bg-gray-200 rounded-full text-16 py-4 px-6 mt-3 mb-6 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-400 text-white py-4 text-16 rounded-full my-8"
          >
            Login
          </button>

          <ul className="flex items-center justify-between text-16">
            <li className="flex items-center gap-2">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </li>
            <li>
              <Link>Forgot Password</Link>
            </li>
          </ul>
        </form>

        <ul className="flex items-center gap-1 text-16 w-full text-gray-400">
          <li className="w-2/6 h-[2px] bg-gray-400"></li>
          <li className="flex-1 text-center">Or continue with</li>
          <li className="w-2/6 h-[2px] bg-gray-400"></li>
        </ul>

        <ul className="grid grid-cols-2 gap-8 text-16">
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

        <p className="text-16 w-full mx-auto text-center mt-8">
          <Link to="/">
            New to inpost?{" "}
            <span className="font-semibold">Create an account</span>
          </Link>
        </p>
      </Section>
    </Main>
  );
}

export default Login;
