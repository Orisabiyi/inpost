import logo from "../assets/logo.svg";

function CreateAccount() {
  return (
    <main>
      <figure>
        <img src={logo} alt="inpost logo" />

        <div>
          <p>Step 1/4</p>
          <h1>
            <span>Content</span>
            <span>made for</span>
            <span>you</span>
          </h1>
        </div>
      </figure>

      <form method="post"></form>
    </main>
  );
}

export default CreateAccount;
