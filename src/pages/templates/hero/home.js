import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './home.css';
import heroImage from '../../images/me.jpg'

function Home() {
  return (
    <div className={'d-flex flex-wrap justify-content-between col-lg-12 main-color'} id={'landing'}>
      <div className={'col-12 col-lg-6'}>
        <h1 id={'Hello'}>Hello, <br></br>I am Paul.</h1>
        <h2>
        <ul className={'text-right'}>
          <li>About</li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>Contact</li>
        </ul>
        </h2>
      </div>
      <div className={'col-12 col-lg-6 transition mt-4'}>
        <img class={'img-dimensions shadowed'} src={heroImage}></img>
      </div>
    </div>
  )
}

export default Home;
