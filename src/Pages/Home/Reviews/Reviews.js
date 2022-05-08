import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css';
import Typed from 'react-typed';

const Reviews = () => {
    const [clientReviews, SetClientReviews] = useState([])
    useEffect(() => {
        fetch("https://tranquil-beyond-66752.herokuapp.com/review")
            .then(res => res.json())
            .then(data => SetClientReviews(data))
    }, [])
    return (
        <div className='customer-reviews'>
            <h1 style={{ textAlign: "center", fontSize: "45px", color: "white" }}>
                <Typed
                    strings={[
                        'Customer Reviews']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>

            </h1>
            <div className='reviews-container' data-aos="zoom-in">
                {
                    clientReviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;