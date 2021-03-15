import React, { useEffect, useState } from 'react'
import Nav from './nav'
import Ztext from 'react-ztext'
import '../fonts/PolarVortex-raAA.ttf';

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
			<div className="text-center col-12" >
				<Ztext
					depth='2rem'
					direction='both'
					event='pointer'
					eventRotation='30deg'
					eventDirection='default'
					fade={true}
					layers={10}
					perspective='700px'
				>
					<div className="font">
						Reviews
					</div>
				</Ztext>
			</div>
			{reviews.map(review => {
				return (
					<>
						<div className="d-flex justify-content mb-5">
							<div className="m-auto col-12 col-lg-5">
								<img className="review-image" id={review.url} src={"http://localhost:1337" + review.image.url}></img>
							</div>
							<div className="m-auto col-12 col-lg-5">
								<h4>{review.reviews}</h4>
								<h5>{review.name}</h5>
							</div>
						</div>
					</>
					)
				})}
		</>
	)
}

export default Reviews;
