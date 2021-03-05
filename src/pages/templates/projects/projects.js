import React, { useState, useEffect } from 'react'
import '../hero/home.css'
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from "react-icons/cg";
import { ProjectStyles, IconStyles, ImageStyles, RowStyles} from "./tailwind"


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
					entry.target.classList.remove('fade-node')
					entry.target.classList.add('transition')
				} else {
					entry.target.classList.remove('transition')
					entry.target.classList.add('fade-node')
				}
			});
		}, {rootMargin: "0px 0px -200px 0px"});

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
    <div className={'main-color'}>
      {projects.map(project => {
				return (
					<RowStyles key={project.id}>
						<ImageStyles>
							<img id={project.url} src={"http://localhost:1337" + project.images.url}></img>
						</ImageStyles>
            <ProjectStyles>
              <h3 className={'text-center pb-3 '}>{project.title}</h3>
							<p>{project.descriptions}</p>
							<div className={'d-flex align-items-center justify-content-center'}>
								<div className={'rotate'}>
									<IconStyles>
										<AiFillGithub style={{ color: '#D972FF' }} size={30} />
									</IconStyles>
								</div>
								<h6 className={'mr-3 text-shadow'}>CODE</h6>
								<div className={'rotate'} onClick={openWindow}>
									<IconStyles>
										<CgWebsite id={project.url} style={{ color: '#009999' }} size={30} />
									</IconStyles>
								</div>
								<h6 className={'text-shadow'}>LIVE</h6>
							</div>
						</ProjectStyles>
          </RowStyles>
        )
        })}
  </div>
  )
}

export default Projects;
