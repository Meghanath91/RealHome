import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Properties from "./components/Properties/Properties";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";
import News from "./components/News/News";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
    <Router>
    <Navbar/>
        <Switch>
          <Route path="/properties">
            <Properties />
          </Route>

          <Route path="/reviews">
            <Reviews />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/News">
            <News />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
