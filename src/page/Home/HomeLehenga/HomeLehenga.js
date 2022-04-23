import React from 'react';

const HomeLehenga = ({singleLehenga}) => {
    const {img, name, price} = singleLehenga;
    return (
            <div className='singlelehenga col-sm-12 col-md-6 col-lg-4'>
            <img height={300} width={300} src={img} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
        </div>
    );
};

export default HomeLehenga;