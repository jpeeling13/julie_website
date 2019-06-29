import React from 'react';
import './App.css';
import {HashRouter as Router, Route} from "react-router-dom";
import TopNav from "./components/TopNav.js";
import AboutPage from "./components/AboutPage.js";
import TestimonialsPage from "./components/TestimonialsPage.js";

function App() {
  return (
    <Router basename="/">
      <Route path="/" component={TopNav} />
      <Route path="/" exact component={AboutPage} />
      <Route path="/testimonials" exact component={TestimonialsPage} />
    </Router>
  );
}

export default App;
