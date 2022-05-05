import React from 'react';
import useService from '../../hooks/useService';
import ManageInventory from '../ManageInventory/ManageInventory';
import Typed from 'react-typed';
import './ManageInventories.css'

const ManageInventories = () => {
    const [services, setServices] = useService()
    return (
        <div>
            <h1 style={{ marginTop: "6.5rem" }} className='text-center'>
                <Typed
                    strings={[
                        'Manage Inventories']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
            </h1>
            <div className='container inventories'>
                {
                    services.map(manageInventory => <ManageInventory
                        key={manageInventory._id}
                        manageInventory={manageInventory}
                    ></ManageInventory>)
                }
            </div>
        </div>
    );
};

export default ManageInventories;