import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import '../pages/hero/home.css'

const Nav = () => {
	return (
		<div className="d-flex justify-content-around nav pt-2">
			<AniLink className="text-white" paintDrip to="/" hex="#F3D5FF" duration={1}>
				<h3>Home</h3>
			</AniLink>
			<AniLink className="text-white" paintDrip to="/projects" hex="#F3D5FF" duration={1}>
				<h3>Projects</h3>
			</AniLink>
			<AniLink className="text-white h3" paintDrip to="/about" hex="#1D3B3E" duration={1}>
				<h3>About</h3>
			</AniLink>
			<AniLink className="text-white h3" paintDrip to="/reviews" hex="#F3D5FF" duration={1}>
				<h3>Reviews</h3>
			</AniLink>
			<AniLink className="text-white h3" paintDrip to="/contact" hex="#F3D5FF" duration={1}>
				<h3>Contact</h3>
			</AniLink>
		</div>
	);
};

export default Nav;
