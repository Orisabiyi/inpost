import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import ValidateScreen from "./pages/ValidateScreen";
import Connect from "./pages/Connect";
import AccountCreation from "./pages/AccountCreation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/validate" element={<ValidateScreen />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/account-creation" element={<AccountCreation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
