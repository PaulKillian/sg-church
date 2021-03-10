import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import heroImage from './images/me.jpg';
import './hero/home.css'
import Home from '../pages/home'
import About from '../pages/about'
import Projects from '../pages/projects'
import Reviews from '../pages/reviews'
import Contact from '../pages/contact'
import Nav from '../pages/nav'
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/reviews">
          <Reviews />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
