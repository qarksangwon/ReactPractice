import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Age from "./pages/Age";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/profile/:name" element={<Profile />} />
        <Route path="/age/:age" element={<Age />} />
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route> */}
        <Route path="/Login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profiles/:name" element={<Profile />} />
          <Route path="/age/:age" element={<Age />} />
        </Route>
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
