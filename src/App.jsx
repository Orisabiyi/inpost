import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Router } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
