import React, { useEffect, useState } from 'react'
import './post.css'

export default function Post() {
	const [post, setPost] = useState([])

	const getPost = async () => {
		const apiCall = await fetch('http://localhost:1337/titles', {})
		const post = await apiCall.json()
		setPost(post)
	}

	console.log(post)

	useEffect(() => { getPost() }, []);

	return (
		<div>
			{post.map(onePost =>
				<>
					<p>{onePost.date}</p>
					<h2>{onePost.title}</h2>
					<div className='flex-center'>
						<img src={"http://localhost:1337" + onePost.image.url}></img>
					</div>
					<h3 className={'text-center'}>{onePost.subTitle}</h3>
					<div className='flex-center'>
						<p>{onePost.post}</p>
					</div>
				</>
			)}
		</div>
	)
}
