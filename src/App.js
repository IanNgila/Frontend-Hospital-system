import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Header from "./components/Nav/Header";
// import Nav from "./components/Nav/Nav";
import Doctor from "./pages/Doctor";
import DoctorSignup from './components/Auth/Doctor/DoctorSignup'
import DoctorSignIn from "./components/Auth/Doctor/DoctorSignIn";
import AdminSignIn from "./components/Auth/Admin/AdminSignin";
import AdminSignUp from "./components/Auth/Admin/AdminSignup";
import ManagerSignUp from "./components/Auth/Manager/ManagerSIgnUp";
import ManagerSignIn from "./components/Auth/Manager/ManagerSignIn";


import PatientDetails from './components/PatientDetails'
import Home from "./pages/Home";
import Patient from "./pages/Shift";
import Pharmacy from "./pages/Pharmacy";
import Registrar from "./pages/Registrar";
import Laboratory from "./pages/Laboratory";
import Admin from "./pages/Admin";
import "./pages/App.css";
import Manager from "./pages/Manager";

// import TestNav from "./components/TestNav";
const App = () => {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(null);

  // if(!user){
  //   return(<SignIn/>)
  // }
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/laboratory" element={<Laboratory />} />

        <Route path="/patientdetails/:id" element={<PatientDetails />} />
        <Route
          path="/signin"
          element={<SignIn user={user} setUser={setUser} />}
        />
        <Route
          path="/signup"
          element={<SignUp onLogin={() => setLogin(login)} />}
        />
        <Route
          path="/doctorsignup"
          element={<DoctorSignup onLogin={() => setLogin(login)} />}
        />
        <Route
          path="/doctorsignin"
          element={<DoctorSignIn onLogin={() => setLogin(login)} />}
        />
        <Route
          path="/adminsignin"
          element={<AdminSignIn onLogin={() => setLogin(login)} />}
        />
        <Route
          path="/adminsignup"
          element={<AdminSignUp onLogin={() => setLogin(login)} />}
        />
        <Route
          path="/managersignup"
          element={<ManagerSignUp onLogin={() => setLogin(login)} />}
        />
        <Route
          path="/managersignin"
          element={<ManagerSignIn onLogin={() => setLogin(login)} />}
        />
      </Routes>
    </div>
  );
};

export default App;
