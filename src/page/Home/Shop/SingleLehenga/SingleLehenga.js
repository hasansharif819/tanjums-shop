import React from 'react';
import { Card } from 'react-bootstrap';
import './SingleLehenga.css';

const SingleLehenga = ({ singleLehenga }) => {
    const { name, img, price, rating } = singleLehenga;

    return (
        <div border="primary" className='col-sm-12 col-md-6 col-lg-4 g-4'>
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
                {/* <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p><small>Ratings: {rating}</small></p>
                <button className='btn btn-primary mx-5'>Buy Now</button>
                <button className='btn btn-success'>Add to Cart</button> */}
            </Card>
        </div>
    );
}

export default SingleLehenga;