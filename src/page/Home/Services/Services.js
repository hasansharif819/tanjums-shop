import React, { useEffect, useState } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( ()=>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])
    return (
        <div>
            <PageTitle title='Services'></PageTitle>
            <h2>Our Services</h2>
            <div className="row">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;