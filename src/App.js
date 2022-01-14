import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Containers & components
import Title from "./components/global/title/index";
import Home from "./containers/home";
import Footer from "./components/global/footer/index";

const App = () => {
  return (
    <>
      <Title />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
