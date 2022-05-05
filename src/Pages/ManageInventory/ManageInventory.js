import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageInventory.css';

const ManageInventory = ({ manageInventory }) => {
    const { id, img, name, price, description, supplierName, quantity } = manageInventory;
    const navigate = useNavigate();

    return (
        <div>
            <div className='inventory shadow-lg' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h5>Price:-$ {price}</h5>
                <h5>Quantity:-{quantity}</h5>
                <button type="button" style={{ borderRadius: "50px" }} className="btn btn-primary btn-md">DELETE</button>
            </div>
        </div>
    );
};

export default ManageInventory;