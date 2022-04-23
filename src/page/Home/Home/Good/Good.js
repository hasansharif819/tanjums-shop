import React from 'react';
import './Good.css';

const Good = ({good}) => {
    const {img, name, description, price} = good;
    return (
        <div className='goods col-sm-12 col-md-6 col-lg-4 gap-5px'>
            <img width={300} height={300} src={img} alt="" />
            <h6>{name}</h6>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary mx-5'>Buy Now</button>
            <button className='btn btn-success'>Add to Cart</button>
        </div>
    );
};

export default Good;