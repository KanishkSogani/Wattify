import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
