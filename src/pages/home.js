import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import './hero/home.css';
import heroImage from './images/me.jpg'
import screen from './images/screen.png'
import '../fonts/MaroonBold.ttf';

function Home() {
  return (
    <div className={'d-flex flex-wrap justify-content-between col-lg-12 home-color font'} id={'landing'}>
      <div className={'col-12 col-lg-6'}>
        <h1 id={'Hello'}>Hello, <br></br>I am Paul.</h1>
        <h2>
        <ul className={'text-right'}>
            <li>
              <img className='icon' src={screen} alt='desktop screen'></img>
            <AniLink paintDrip to="projects" hex="#F3D5FF" duration={1}>
              Projects
            </AniLink>
          </li>
          <li>
              <AniLink paintDrip to="/about" hex="#1D3B3E" duration={1}>
              About
            </AniLink>
          </li>
          <li>
            <AniLink paintDrip to="/reviews" hex="#F3D5FF" duration={1}>
              Reviews
            </AniLink>
          </li>
          <li>
            <AniLink paintDrip to="contact" hex="#F3D5FF" duration={1}>
              Contact
            </AniLink>
          </li>
        </ul>
        </h2>
      </div>
      <div className={'col-12 col-lg-6 transition mt-4'}>
        <img className={'img-dimensions shadowed'} src={heroImage}></img>
      </div>
    </div>
  )
}

export default Home;
