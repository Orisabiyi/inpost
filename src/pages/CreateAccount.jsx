import logo from "../assets/logo.svg";
import "../assets/fonts.css";

function CreateAccount() {
  return (
    <main
      className="flex items-center bg-gray-100 p-8 gap-40"
      style={{ fontFamily: "Filson Pro", fontWeight: "400" }}
    >
      <section className="flex flex-col items-start justify-between flex-auto w-1/2 min-h-screen bg-blue-200 rounded-4 p-12">
        <img src={logo} alt="inpost logo" />

        <div className="text-gray-600">
          <p className="text-16 mb-4">Step 1/4</p>
          <h1 className="flex flex-col items-start text-60 leading-none">
            <span>Content</span>
            <span>made for</span>
            <span>you.</span>
          </h1>
        </div>
      </section>

      <section className="flex-auto w-1/2 flex flex-col items-start justify-center gap-10">
        <h3
          className="flex flex-col text-32 leading-none"
          style={{ fontFamily: "Filson Pro", fontWeight: "500" }}
        >
          <span>Create a free account</span>
          <span>to explore a consistent</span>
          <span>Linkedin brand</span>
        </h3>

        <form
          method="post"
          className="flex flex-col items-stretch justify-center text-gray-600"
          style={{ fontFamily: "Filson Pro", fontWeight: "400" }}
        >
          <label htmlFor="email" className="text-16">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Username@example.com"
            className="border-2 w-[45rem] bg-gray-200 rounded-full text-16 py-4 px-6 mt-3 mb-6 outline-none"
          />

          <label htmlFor="password" className="text-16">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="***************"
            className="border-2 w-[45rem] bg-gray-200 rounded-full text-16 py-4 px-6 mt-3 mb-6 outline-none"
          />

          <button
            type="submit"
            className="bg-blue-400 text-white py-4 text-16 rounded-full mt-8"
          >
            Create an account
          </button>
        </form>
      </section>
    </main>
  );
}

export default CreateAccount;
