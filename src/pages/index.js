import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import heroImage from './images/me.jpg';
import './templates/hero/home.css'
import Home from './templates/hero/home'
import About from './templates/about/about'
import Projects from './templates/projects/projects'
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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
