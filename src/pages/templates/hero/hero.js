// import React, {useState, useEffect} from 'react';
// import './hero.css';
// import heroImage from '../../images/me.jpg'
// // import backVid from '../../images/hero2.mp4'
// // import essential from '../../images/project-images/essential.png'
// // import itmz from '../../images/project-images/itmz.png'
// // import chevitas from '../../images/project-images/chevitas.png'
// // import superWings from '../../images/project-images/super.png'
// // import instant from '../../images/project-images/instant.png'
// // import bork from '../../images/project-images/bork.png'

// function Hero() {
// 	const [click, setClick] = useState('');
// 	const [projects, setProjects] = useState([])

// 	useEffect(() => {
// 		const myImgs = document.querySelectorAll('#animate');
// 		// const hidden = document.querySelector('.hidden');

// 		const observer = new IntersectionObserver(entries => {
// 			entries.forEach(entry => {
// 				if (entry.intersectionRatio > 0) {
// 					console.log('in the view');
// 					entry.target.classList.add('slide')
// 				} else {
// 					console.log('out of view');
// 					entry.target.classList.remove('slide')
// 				}
// 			});
// 		});

// 		myImgs.forEach(image => {
// 			observer.observe(image);
// 		});
// 		getProjects()
// 	}, []);

// 	function changeView(event) {
// 		if (event.target.id === 'Hello') {
// 			setClick('Hello');
// 		}
// 	}

// 	const openWindow = (event) => {
// 		window.open(event.target.id, "width=200, height=1040, top=0, left=960");
// 	}

// 	const getProjects = async () => {
// 		const apiCall = await fetch('http://localhost:1337/projects', {})
// 		const project = await apiCall.json()
// 		setProjects(project)
// 	}

// 	if (click === 'Hello') {
// 		return (
// 			<div className={'d-flex flex-wrap justify-content-around'}>
// 				{projects.map(function (project, i) {
// 				if (project.position === 'left') {
// 					return (
// 						<div className={'d-flex justify-content-between main-color align-items-center'}>
// 							<img id={project.url} key={i}
// 								onClick={openWindow} src={"http://localhost:1337" + project.images.url}
// 								className='col-12 col-lg-6 pro-dimensions transition top'></img>
// 							<div id={'animate'} className={'col-12 col-lg-6 project-color shadowed pt-3 pl-4'}>
// 								<h3>{project.title}</h3>
// 								<p>{project.descriptions}</p>
// 							</div>
// 						</div>
// 					)
// 				} else {
// 					return (
// 						<div className={'d-flex justify-content-between main-color align-items-center'}>
// 							<div className={'d-flex justify-content-end'}>
// 							<div className={'col-12 col-lg-10 left top position-relative project-color shadowed pt-3'}>
// 								<h3>{project.title}</h3>
// 								<p>{project.descriptions}</p>
// 								</div>
// 								</div>
// 							<img id={project.url} key={i}
// 								onClick={openWindow} src={"http://localhost:1337" + project.images.url}
// 								className='col-12 col-lg-6 pro-dimensions transition top'>
// 							</img>
// 						</div>
// 					)
// 				}
// 			})}
// 		</div>
// 		)
// 	} else {
// 			return (
// 				<div onClick={changeView}
// 					className={'d-flex flex-wrap justify-content-between col-lg-12 main-color'} id={'landing'}>
// 					<div className={'col-12 col-lg-6'}>
// 						<h1 id={'Hello'}>Hello, <br></br>I am Paul.</h1>
// 						<h2>
// 						<ul className={'text-right'}>
// 							<li>About</li>
// 							<li>Projects</li>
// 							<li>Contact</li>
// 						</ul>
// 						</h2>
// 					</div>
// 					<div className={'col-12 col-lg-6 transition mt-4'}>
// 						<img class={'img-dimensions shadowed'} src={heroImage}></img>
// 					</div>
// 				</div>
// 			)
// 		}
// };

// export default Hero;
