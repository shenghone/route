import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Math from "./Pages/Math/Math";
import Nav from "./Components/Nav/Nav";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route component={Nav} />
      <Switch>
        <Route exact path="/math/:testNumber" component={Math} />
        <Route exact path="/math" component={Math} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
