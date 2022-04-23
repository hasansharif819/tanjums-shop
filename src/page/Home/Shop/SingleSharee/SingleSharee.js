import React from 'react';
import './SingleSharee.css';

const SingleSharee = ({singleSharee}) => {
    const {name, img, price, rating} = singleSharee;
    return (
        <div className='singleSharee col-sm-12 col-md-6 col-lg-4'>
            <img width={300} src={img} alt="" />
            <h5>Name: {name}</h5>
            <p>Price: ${price}</p>
            <p>Ratings: {rating}</p>
            <button className='btn btn-primary mx-5'>Buy Now</button>
            <button className='btn btn-success'>Add to Cart</button>
        </div>
    );
};

export default SingleSharee;