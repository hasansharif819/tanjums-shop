import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
            <div className='footer'>
                <h6>Thanjum's Shop</h6>
                <h6>Copy Rights Reserved</h6>
                <h6>{year}</h6>
            </div>
    );
};

export default Footer;