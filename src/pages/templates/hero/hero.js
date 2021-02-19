import React, {useState, useEffect} from 'react';
import './hero.css';
import heroImage from '../../images/me.jpg'
import backVid from '../../images/hero2.mp4'
import essential from '../../images/project-images/essential.png'
// import itmz from '../../images/project-images/itmz.png'
import chevitas from '../../images/project-images/chevitas.png'
// import superWings from '../../images/project-images/super.png'
// import instant from '../../images/project-images/instant.png'
// import bork from '../../images/project-images/bork.png'

function Hero() {
	const [click, setClick] = useState('');

	useEffect(() => {
		const myImgs = document.querySelectorAll('#animate');
		// const hidden = document.querySelector('.hidden');

		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.intersectionRatio > 0) {
					console.log('in the view');
					entry.target.classList.add('slide')
				} else {
					console.log('out of view');
					entry.target.classList.remove('slide')
				}
			});
		});

		myImgs.forEach(image => {
			observer.observe(image);
		});
	});

	function changeView(event) {
		if (event.target.id === 'Hello') {
			setClick('Hello');
		}
	}

	const openWindow = (event) => {
		window.open(event.target.id, "width=200, height=1040, top=0, left=960");
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
				{/* <video className='video transition' autoPlay loop muted>
					<source src={backVid} type='video/mp4' />
				</video> */}
				<div className={'d-flex flex-wrap justify-content-around'}>
					<div className={'d-flex justify-content-around align-items-center'}>
						<img id={"http://essentialcleaningoptions.com"}
							onClick={openWindow} src={essential} className='col-lg-6 pro-dimensions transition top'></img>
						<div className={'col-lg-6 product-color shadowed mr-5'}>
							<h3>Essential Cleaning Options</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
								ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
								laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
								voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
								non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
					</div>
					<div className={'d-flex justify-content-around align-items-center'}>
						<div className={'col-lg-5 product-color shadowed wrapper'}>
							<div id={'animate'}>
								<h3>Essential Cleaning Options</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
									ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
									voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
									non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								</div>
						</div>
						<img id={"https://chevitas-bagels-lfzag.ondigitalocean.app/"}
								onClick={openWindow} src={chevitas} className='col-lg-6 pro-dimensions transition top'></img>
					</div>
					{/* <img id={"https://itmz-us.com/"}
						onClick={openWindow} src={itmz} className='pro-dimensions transition top'></img>
					<img id={"https://superwings.pkillian.com/"}
						onClick={openWindow} src={superWings} className='pro-dimensions transition top'></img>
					<img id={"https://paulkillian.github.io/instant-recipe/"}
						onClick={openWindow} src={instant} className='pro-dimensions transition top'></img>
					<img id={"https://borkfrens.pkillian.com/"}
						onClick={openWindow} src={bork} className='pro-dimensions transition top'></img> */}
				</div>
			</>
		)
	} else {
			return (
				<div onClick={changeView}
					className={'d-flex flex-wrap justify-content-between col-lg-12 main-color'} id={'landing'}>
					<div className={'col-12 col-lg-6'}>
						<h1 id={'Hello'}>Hello, <br></br>I am Paul.</h1>
						<h2>
						<ul className={'text-right'}>
							<li>About</li>
							<li>Projects</li>
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
};

export default Hero;
