import React, { useEffect, useState } from 'react'
import Nav from './nav'

const Reviews = () => {
	const [reviews, setReviews] = useState([])

	useEffect(() => {
		// window.addEventListener('scroll', observer);
		getReviews()
	}, []);

	const getReviews = async () => {
		const apiCall = await fetch('http://localhost:1337/reviews', {})
		const review = await apiCall.json()
		setReviews(review)
		console.log(reviews)
	}

	return (
		<>
			<Nav />
			<div>
				{reviews.map(review => {
					<div>
						<h4>{review.review}</h4>
						<h5>{review.name}</h5>
					</div>
				})}
			</div>
		</>
	)
}

export default Reviews;
