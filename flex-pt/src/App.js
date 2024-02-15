import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import HomePage from "./pages/home/home.js";
import LocationPage from "./pages/location/location.js";
import ProgramPage from "./pages/program/program.js";
import ContactPage from "./pages/contact/contact.js";
import LoginPage from "./pages/login/login.js";
import SignUpPage from "./pages/login/signup.js";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="headerhigh"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
