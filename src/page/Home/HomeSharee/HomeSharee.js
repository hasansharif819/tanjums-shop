import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const HomeSharee = ({ singleSharee }) => {
    const { name, img, price } = singleSharee;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Price: ${price}</Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default HomeSharee;