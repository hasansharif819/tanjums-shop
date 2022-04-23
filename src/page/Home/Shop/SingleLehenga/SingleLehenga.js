import React from 'react';
import './SingleLehenga.css';

const SingleLehenga = ({singleLehenga}) => {
    const {name, img, price, rating} = singleLehenga;

    return (
        <div className='singlelehenga col-sm-12 col-md-6 col-lg-4'>
            <img width={300} height={200} src={img} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <p><small>Ratings: {rating}</small></p>
            <button className='btn btn-primary'>Add to Card</button>
        </div>
    );
}

export default SingleLehenga;