import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className="footer">
            <Navbar fixed="bottom">
                <p>Tanjum's Shop</p>
                <br />
            <p>Copy Rights Reserved {year}</p>
            </Navbar>
        </div>
    );
};

export default Footer;