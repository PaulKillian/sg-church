import React, {useState} from 'react';
import './hero.css';
import heroImage from '../../images/me.jpg'
import backVid from '../../images/hero2.mp4'
import essential from '../../images/project-images/essential.png'
import itmz from '../../images/project-images/itmz.png'
import chevitas from '../../images/project-images/chevitas.png'
import superWings from '../../images/project-images/super.png'
import instant from '../../images/project-images/instant.png'
import bork from '../../images/project-images/bork.png'

function Hero() {
	const [click, setClick] = useState('');

	// useEffect(() => {
	// 	const myImgs = document.querySelectorAll('.animate-me');
	// 	// const hidden = document.querySelector('.hidden');

	// 	const observer = new IntersectionObserver(entries => {
	// 		entries.forEach(entry => {
	// 			if (entry.intersectionRatio > 0) {
	// 				console.log('in the view');
	// 				entry.target.classList.add('slide')
	// 			} else {
	// 				console.log('out of view');
	// 				entry.target.classList.remove('slide')
	// 			}
	// 		});
	// 	});

	// 	myImgs.forEach(image => {
	// 		observer.observe(image);
	// 	});
	// });

	function changeView(event) {
		if (event.target.id === 'Hello') {
			setClick('Hello');
		}
	}

	const openWindow = (event) => {
		window.open(event.target.id)
	}

	// var x = window.matchMedia("(min-width: 700px)")
	// openWindow(x) // Call listener function at run time
	// x.addListener(openWindow)

	if (click === 'Hello') {
		return (
			<>
				{/* <div className={'col-lg-6 ml-3'}>
					<h1 id={'Hello'} >Hello, <br></br>I am Paul.</h1>
					<h2>
					<ul className={'text-right'}>
						<li>About</li>
						<li>Projects</li>
						<li>Contact</li>
					</ul>
					</h2>
				</div> */}
				<video className='video transition' autoPlay loop muted>
					<source src={backVid} type='video/mp4' />
				</video>
				<div className={'d-flex flex-wrap justify-content-around'}>
					<img id={"http://essentialcleaningoptions.com"}
						onClick={openWindow} src={essential} className='pro-dimensions transition top'></img>
					<img id={"https://chevitas-bagels-lfzag.ondigitalocean.app/"}
						onClick={openWindow} src={chevitas} className='pro-dimensions transition top'></img>
					<img id={"https://itmz-us.com/"}
						onClick={openWindow} src={itmz} className='pro-dimensions transition top'></img>
					<img id={"https://superwings.pkillian.com/"}
						onClick={openWindow} src={superWings} className='pro-dimensions transition top'></img>
					<img id={"https://paulkillian.github.io/instant-recipe/"}
						onClick={openWindow} src={instant} className='pro-dimensions transition top'></img>
					<img id={"https://borkfrens.pkillian.com/"}
						onClick={openWindow} src={bork} className='pro-dimensions transition top'></img>
				</div>
			</>
		)
	} else {
			return (
				<div onClick={changeView} className={'d-flex justify-content-between col-lg-12'} id={'landing'}>
					<div className={'col-lg-7'}>
						<h1 id={'Hello'}>Hello, <br></br>I am Paul.</h1>
						<h2>
						<ul className={'text-right'}>
							<li>About</li>
							<li>Projects</li>
							<li>Contact</li>
						</ul>
						</h2>
					</div>
					<div>
						<img class={'col-lg-12 transition py-5'} src={heroImage}></img>
					</div>
				</div>
			)
		}
};

export default Hero;
