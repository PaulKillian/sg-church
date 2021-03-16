import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import '../pages/hero/home.css'
import '../fonts/PolarVortex-raAA.ttf';

const Nav = () => {
	return (
		<div className="d-flex justify-content-around nav pt-2 shadowed">
			<AniLink className="text-white" paintDrip to="/" hex="#F3D5FF" duration={1}>
				<h3 className="font">Home</h3>
			</AniLink>
			<AniLink className="text-white" paintDrip to="/projects" hex="#F3D5FF" duration={1}>
				<h3 className="font">Projects</h3>
			</AniLink>
			<AniLink className="text-white h3" paintDrip to="/about" hex="#1D3B3E" duration={1}>
				<h3 className="font">About</h3>
			</AniLink>
			<AniLink className="text-white h3" paintDrip to="/reviews" hex="#F3D5FF" duration={1}>
				<h3 className="font">Reviews</h3>
			</AniLink>
			<AniLink className="text-white h3" paintDrip to="/contact" hex="#F3D5FF" duration={1}>
				<h3 className="font">Contact</h3>
			</AniLink>
		</div>
	);
};

export default Nav;
