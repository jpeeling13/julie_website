import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import TopNav from "./components/TopNav.js";

function App() {
  return (
    <Router>
      <Route path="/" component={TopNav} />
      <div className="App-body">
        <div className="splashHandshake">
        <h1 className="splashPageTitle">About Julie East</h1>
        </div>
        <p>
          Julie East HR Website Coming Soon...
        </p>
      </div>
    </Router>
  );
}

export default App;
