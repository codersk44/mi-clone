import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Ser from "./components/Ser";
import About from "./components/About";

import "./styles/App.scss";
import "./styles/colors.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Footer.scss"
import "./styles/Contact.scss"
import "./styles/media.scss"
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Ser />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
