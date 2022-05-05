import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, img, name, price, description, supplierName, quantity } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }

    return (
        <div>
            <div className='service shadow-lg' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h5>Price:-$ {price}</h5>
                <h5>Quantity:-{quantity}</h5>
                <p>{description}</p>
                <h5>Supplier:-{supplierName}</h5>
                <button onClick={() => navigateToServiceDetail(_id)} type="button" style={{ borderRadius: "50px" }} className="btn btn-primary btn-md">Book {name}</button>
            </div>
        </div>
    );
};

export default Service;