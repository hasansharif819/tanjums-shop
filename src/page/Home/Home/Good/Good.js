import React from 'react';
import { Card } from 'react-bootstrap';
import './Good.css';

const Good = ({good}) => {
    const {img, name, description, price} = good;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 gap-5px'>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Price: ${price}</Card.Text>
                    <Card.Text>Description: {description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button className='btn btn-primary mx-5'>Buy Now</button>
                    <button className='btn btn-success'>Add to Cart</button>
                </Card.Footer>
            {/* <img width={300} height={300} src={img} alt="" />
            <h6>{name}</h6>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary mx-5'>Buy Now</button>
            <button className='btn btn-success'>Add to Cart</button> */}
            </Card>
        </div>
    );
};

export default Good;