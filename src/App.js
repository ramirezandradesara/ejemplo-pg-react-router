import React from "react";
import Home from "./Home.jsx";
import Main from "./Main.jsx";
import About from "./About.jsx";
import Faq from "./Faq.jsx";
import NotFound from "./NotFound.jsx";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/main">Main</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/brokenlink">Link roto</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
