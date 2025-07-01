import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navbar";
import News from "./components/news";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <NavBar />
          <Routes>
            <Route path="/" element={<News />} />
            {/* <Route path="/news" element={<News />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
