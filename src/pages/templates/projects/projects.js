import React, { useState, useEffect } from 'react'
import '../hero/home.css'
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from "react-icons/cg";


function Projects() {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		window.addEventListener('scroll', observer);
		getProjects()
	}, []);

	const observer = () => {
    const fadeNodes = document.querySelectorAll('.fade-node');
    const slideNodes = document.querySelectorAll('.slideNode');

		const observer1 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
				if (entry.intersectionRatio > 0) {
					entry.target.classList.add('transition')
				} else {
					entry.target.classList.remove('transition')
				}
			});
		});

		fadeNodes.forEach(leftNode => {
			observer1.observe(leftNode);
    });

    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
				if (entry.intersectionRatio > 0) {
					entry.target.classList.add('slide')
				} else {
					entry.target.classList.remove('slide')
				}
			});
		});

		slideNodes.forEach(rightNode => {
			observer2.observe(rightNode);
		});
}


	const openWindow = (event) => {
		window.open(event.target.id, "width=200, height=1040, top=0, left=960");
	}

	const getProjects = async () => {
		const apiCall = await fetch('http://localhost:1337/projects', {})
		const project = await apiCall.json()
		setProjects(project)
	}

  return (
    <div className={'d-flex flex-wrap main-color justify-content-center'}>
      {projects.map(project => {
				return (
          <div className={'d-flex pro-dimensions'} key={project.id}>
            <img id={project.url}
              onClick={openWindow} src={"http://localhost:1337" + project.images.url}
							className='col-12 col-lg-6 m-auto project-initial-position img-dimension top slideNode'></img>
            <div className={'text-justify top fade-node m-auto col-12 col-lg-5 p-5 parallax shadowed project-color'}>
              <h3 className={'text-center pb-3 '}>{project.title}</h3>
							<p>{project.descriptions}</p>
							<div>
							<AiFillGithub style={{color: '#D972FF'}} size={50}></AiFillGithub>
							<CgWebsite style={{color: '#009999'}} size={50}></CgWebsite>
						</div>
						</div>
          </div>
        )
        })}
  </div>
  )
}

export default Projects;
