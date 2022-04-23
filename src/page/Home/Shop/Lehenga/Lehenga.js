import React, { useEffect, useState } from 'react';
import SingleLehenga from '../SingleLehenga/SingleLehenga';

const Lehenga = () => {
    const [lehenga, setLehenga] = useState([]);
    useEffect( () => {
        fetch('lehenga.json')
        .then(res => res.json())
        .then(data => setLehenga(data))
    } ,[])
    return (
        <div className='row'>
            <h2 className='text-center text-primary'>Lehenga Collection</h2>
            {
                lehenga.map(singleLehenga => <SingleLehenga
                    key={singleLehenga.idd}
                    singleLehenga={singleLehenga}
                ></SingleLehenga>)
            }
        </div>
    );
};

export default Lehenga;