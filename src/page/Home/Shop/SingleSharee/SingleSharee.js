import React from 'react';
import { Card } from 'react-bootstrap';
import './SingleSharee.css';

const SingleSharee = ({singleSharee}) => {
    const {name, img, price, rating} = singleSharee;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Price: ${price}</Card.Text>
                    <Card.Text>Ratings: {rating}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button className='btn btn-primary mx-5'>Buy Now</button>
                    <button className='btn btn-success'>Add to Cart</button>
                </Card.Footer>
            {/* <img width={300} src={img} alt="" />
            <h5>Name: {name}</h5>
            <p>Price: ${price}</p>
            <p>Ratings: {rating}</p>
            <button className='btn btn-primary mx-5'>Buy Now</button>
            <button className='btn btn-success'>Add to Cart</button> */}
            </Card>
        </div>
    );
};

export default SingleSharee;