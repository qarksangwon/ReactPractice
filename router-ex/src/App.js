import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Age from "./pages/Age";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/profile/:name" element={<Profile />}></Route>
        <Route path="/age/:age" element={<Age />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
