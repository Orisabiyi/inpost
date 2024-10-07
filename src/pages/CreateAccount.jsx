import logo from "../assets/logo.svg";

function CreateAccount() {
  return (
    <main className="flex items-center bg-gray-100 min-h-screen">
      <section className="flex flex-col items-start justify-between">
        <img src={logo} alt="inpost logo" />

        <div>
          <p>Step 1/4</p>
          <h1>
            <span>Content</span>
            <span>made for</span>
            <span>you</span>
          </h1>
        </div>
      </section>

      <section>
        <form method="post">u</form>
      </section>
    </main>
  );
}

export default CreateAccount;
