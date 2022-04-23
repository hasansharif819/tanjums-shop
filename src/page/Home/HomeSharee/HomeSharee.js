import React from 'react';

const HomeSharee = ({singleSharee}) => {
    const {name, img, price} = singleSharee;
    return (
        <div className='singleSharee col-sm-12 col-md-6 col-lg-4'>
            <img height={300} width={300} src={img} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
        </div>
    );
};

export default HomeSharee;