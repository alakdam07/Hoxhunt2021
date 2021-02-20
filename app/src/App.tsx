import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/Nav'
import Fetch from "./screens/Criminals";

function App() {
  return (
    <Router>
      <Nav blue />
      <Route exact path="/" component={Fetch} />
    </Router>
  );
}

export default App;
