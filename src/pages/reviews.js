import React, { useEffect, useState } from 'react'
import Nav from './nav'
import '../fonts/MaroonBold.ttf';

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

					<div className="font">
						Reviews
					</div>

			</div>
			<div className={'review-bg'}>
			{reviews.map(review => {
				return (
					<>
						<div className="d-flex justify-content-center align-items-center review-height">
							<div className="col-12 col-lg-5">
								<img className="review-image" id={review.url} src={"http://localhost:1337" + review.image.url}></img>
							</div>
							<div className="col-12 col-lg-5">
								<h4>{review.reviews}</h4>
								<br></br>
								<h5>{review.name}</h5>
							</div>
						</div>
					</>
					)
			})}
				</div>
		</>
	)
}

export default Reviews;
