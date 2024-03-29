//lib imports
import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//my pages
import logo from "../Images/GS-Logo-white640x640.svg";
import CodeExamples from "./Code Examples/Code-Examples";
import About from "./About/About";
import Home from "./Home/Home";
import NoMatch from "./NoMatch";
import Resume from "./Resume";
import Contact from "./Contact/Contact";

class Navigation extends Component {
  render() {
    return (
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Link to="/" className="navbar-brand">
            <Image src={logo} width="50" height="50" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/about" className="nav-link">
                About Me
              </Link>
              <Link to="/resume" className="nav-link">
                Resume
              </Link>
              <NavDropdown title="Code Examples" id="collasible-nav-dropdown">
                <Link to="/code-examples/pokedex" className="dropdown-item">
                  Pokedex
                </Link>
                <Link to="/code-examples/store" className="dropdown-item">
                  Store
                </Link>
                <Link to="/code-examples/3.3" className="dropdown-item">
                  Graphs
                </Link>
                <Link to="/code-examples/bitcoin" className="dropdown-item">
                  Bitcoin Price Index
                </Link>
                <NavDropdown.Divider />
                <Link to="/code-examples" className="dropdown-item">
                  Full List
                </Link>
              </NavDropdown>
            </Nav>
            <Nav>
              <Link to="/contact" className="nav-link">
                Contact Me
              </Link>
              <Link to="/Other" className="nav-link">
                Other Stuff
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Route path="/code-examples" component={CodeExamples} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default Navigation;
