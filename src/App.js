import React from 'react';
import './App.css';
import {HashRouter as Router, Route} from "react-router-dom";
import TopNav from "./components/TopNav.js";

function App() {
  return (
    <Router basename="/">
      <Route path="/" component={TopNav} />
      <div className="App-body">
        <div className="splashContainer">
          <div className="splashImage splashHandshake" />
          <div className="splashText">
            <h1>Julie East HR</h1>
            <p>Coming Soon</p>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
