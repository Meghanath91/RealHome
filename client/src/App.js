import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Properties from "./components/Properties/Properties";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";
import News from "./components/News/News";

function App() {
  return (
    <Router>

      
      <div className="App">
        <Link to="/">Home</Link>

        <Link to="/properties">Properties</Link>

        <Link to="/reviews"></Link>

        <Link to="/contact">Contact</Link>

        <Link to="/news">News</Link>

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
      </div>
    </Router>
  );
}

export default App;
