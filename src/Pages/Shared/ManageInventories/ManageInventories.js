import React from 'react';
import useService from '../../../hooks/useService';
import Service from '../../Home/Service/Service';

const ManageInventories = () => {
    const [services, setServices] = useService()
    return (
        <div>
            <h1 style={{ marginTop: "6.5rem" }} className='text-center'>Manage Inventories</h1>
            <div className='container services'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default ManageInventories;