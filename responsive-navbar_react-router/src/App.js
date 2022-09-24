import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import KeyFeatures from "./pages/KeyFeatures";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import Demo from "./pages/Demo";
import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/features" exact component={KeyFeatures} />
          <Route path="/pricing" exact component={Pricing} />
          <Route path="/testimonials" exact component={Testimonials} />
          <Route path="/demo" exact component={Demo} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
