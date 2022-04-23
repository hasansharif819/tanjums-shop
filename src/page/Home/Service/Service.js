import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const {name, img, servi} = service;
    return (
        <div className='service col-sm-12 col-md-6 col-lg-4'>
            <img width={300} height={300} src={img} alt="" />
            <h4>{name}</h4>
            <p>Service: {servi}</p>
            <button className='btn btn-success'>Booked Now</button>
        </div>
    );
};

export default Service;