import React, { useEffect, useState } from 'react';
import Service from '../Service/Service'
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    const homeServices = services.slice(0, 6)
    useEffect(()=>{
        fetch("services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h1 style={{marginTop:"6.5rem"}} className='text-center'>Furniture Store</h1>
            <div className='container services'>
            {
                homeServices.map(service => <Service
                key={service._id}
                service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;

