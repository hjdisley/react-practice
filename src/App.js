import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Leagues from "./Components/Leagues";

const App = () => {
  return (
    <Router>
      <Route path="/leagues" component={Leagues} />
      <Route path="/" component={Home} exact />
    </Router>
  );
};

export default App;
