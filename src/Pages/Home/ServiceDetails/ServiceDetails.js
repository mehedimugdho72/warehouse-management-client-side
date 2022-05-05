import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} =useParams();
    return (
        <div>
            <h1>rana:-{serviceId}</h1>
        </div>
    );
};

export default ServiceDetails;