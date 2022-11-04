import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Nav from "./components/Nav/Nav";
import Doctor from "./pages/Doctor";
import Home from "./pages/Home";
import Patient from "./pages/Patient";
import Pharmacy from "./pages/Pharmacy";
import Registrar from "./pages/Registrar";

function App() {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(null);
  return (
    <div className="App">
      <Nav setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/patient" element={<Patient />} />
        <Route
          path="/signin"
          element={<SignIn user={user} setUser={setUser} />}
        />
        <Route
          path="/signup"
          element={<SignUp onLogin={() => setLogin(login)} />}
        />
      </Routes>
    </div>
  );
}

export default App;
