import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header.js";
import HomePage from "./pages/home.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
