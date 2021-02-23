import React, { useState, useEffect } from 'react'
import '../hero/home.css'

function Projects() {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		window.addEventListener('scroll', observer);
		getProjects()
	}, []);

	const observer = () => {
    const fadeNodes = document.querySelectorAll('.fadeNode');
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
    <div className={'d-flex flex-wrap justify-content-around'}>
      {projects.map(project => {
        return (
          <div className={'d-flex justify-content-around main-color pro-dimensions align-items-center'}>
            <img id={project.url} key={project.id}
              onClick={openWindow} src={"http://localhost:1337" + project.images.url}
              className='col-12 col-lg-6 project-initial-position img-dimension top slideNode'></img>
            <div className={'fadeNode col-12 col-lg-5 pt-3 pl-4'}>
              <h3>{project.title}</h3>
              <p>{project.descriptions}</p>
            </div>
          </div>
        )
        })}
  </div>
  )
}

export default Projects;
