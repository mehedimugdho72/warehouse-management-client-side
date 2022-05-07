import React from 'react';
import { Button } from 'react-bootstrap';
import './QuantityAdded.css';

const QuantityAdded = ({product}) => {
    return (
        <div data-aos="zoom-in-down">
            <div className='text-center rounded-3 mb-5 mt-5
                col-lg-10 col-md-10 col-sm-12 col-12 mx-auto'>
                <div className='quantityAdded'>
                    <h1>Quantity:- {product.quantity}</h1>
                    <input type="text" className='mt-1 text-center' style={{ height: "50px", width: "17rem", borderRadius: "10px" }} placeholder="Quantity Added" />
                    <hr className='text-white' style={{ height: '3px' }} />
                    <div className="d-flex justify-content-center">
                        <Button variant="info" className='btn-lg mb-3 fw-bolder'>
                            Restock Inventory
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuantityAdded;