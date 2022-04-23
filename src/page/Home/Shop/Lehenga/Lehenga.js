import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import SingleLehenga from '../SingleLehenga/SingleLehenga';
import './Lehenga.css';

const Lehenga = () => {
    const [lehenga, setLehenga] = useState([]);
    useEffect(() => {
        fetch('lehenga.json')
            .then(res => res.json())
            .then(data => setLehenga(data))
    }, [])
    return (
        <div>
            <PageTitle title='Lehenga'></PageTitle>
            <h2 className='text-center text-primary'>Lehenga Collection</h2>
            <div className='row'>
            <CardGroup>
                {
                    lehenga.map(singleLehenga => <SingleLehenga
                        key={singleLehenga.idd}
                        singleLehenga={singleLehenga}
                    ></SingleLehenga>)
                }
                </CardGroup>
            </div>

        </div>
    );
};

export default Lehenga;