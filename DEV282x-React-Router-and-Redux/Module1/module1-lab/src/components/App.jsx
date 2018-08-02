import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import About from "./About.jsx";
import Resume from "./Resume.jsx";
import Error from "./Error.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Redirect exact path="/" to="/about" />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;