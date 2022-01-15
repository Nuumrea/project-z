import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Containers & components
import Title from "./components/global/title/index";
import Footer from "./components/global/footer/index";
import Home from "./containers/home";
import LeaguePage from "./containers/LeaguePage";

const App = () => {
  return (
    <>
      <Title />
      <Router>
        <Routes>
          <Route path="/league" element={<LeaguePage />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
