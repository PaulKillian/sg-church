import React, { useState, useEffect } from 'react'

function Projects() {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		window.addEventListener('scroll', observer);
		getProjects()
	}, []);

	const observer = () => {
		const myImgs = document.querySelectorAll('.animate');

		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.intersectionRatio > 0) {
					entry.target.classList.add('slide')
				} else {
					entry.target.classList.remove('slide')
				}
			});
		});

		myImgs.forEach(image => {
			observer.observe(image);
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
      {projects.map(function (project, i) {
      if (project.position === 'left') {
        return (
          <div className={'d-flex justify-content-between main-color align-items-center'}>
            <img id={project.url} key={i}
              onClick={openWindow} src={"http://localhost:1337" + project.images.url}
              className='col-12 col-lg-6 pro-dimensions transition top'></img>
            <div className={'animate col-12 col-lg-6 project-color shadowed pt-3 pl-4'}>
              <h3>{project.title}</h3>
              <p>{project.descriptions}</p>
            </div>
          </div>
        )
      } else {
        return (
          <div className={'d-flex justify-content-between main-color align-items-center'}>
            <div className={'d-flex justify-content-end'}>
              <div className={'animate col-12 col-lg-10 left top position-relative project-color shadowed pt-3'}>
                <h3>{project.title}</h3>
                <p>{project.descriptions}</p>
              </div>
            </div>
            <img id={project.url} key={i}
              onClick={openWindow} src={"http://localhost:1337" + project.images.url}
              className='col-12 col-lg-6 pro-dimensions transition top'>
            </img>
          </div>
        )
      }
    })}
  </div>
  )
}

export default Projects;
