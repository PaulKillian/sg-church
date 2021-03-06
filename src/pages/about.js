import React from 'react'
import explorer from './about/explorer.mp4'
import './about/about.css'
import Nav from './nav'

const About = () => {
	return (
		<>
			<Nav />
			<div className={'contain d-flex col-7 m-auto'}>
				<video autoPlay loop>
					<source src={explorer} type="video/mp4" />
					<track label="English" kind="subtitles" srclang="en" src="captions/vtt/sintel-en.vtt" default></track>
				</video>
			</div>
		</>
	)
}

export default About;
