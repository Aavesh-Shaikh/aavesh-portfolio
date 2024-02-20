import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Certifications from "./Components/Certifications/Certifications";
import Portfolio from "./Components/Portfolio/Portfolio";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact>
            <Home />
          </Route>
          <Route path="/about-me" component={About} exact>
            <About />
          </Route>
          <Route path="/skills" component={Skills} exact>
            <Skills />
          </Route>
          <Route path="/projects" component={Projects} exact>
            <Projects />
          </Route>
          <Route path="/certifications" component={Certifications} exact>
            <Certifications />
          </Route>
          {/* <Route path="/portfolio" component={Portfolio} exact>
            <Portfolio />
          </Route> */}
          <Route path="/contact" component={Contact} exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
