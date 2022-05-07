import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageInventoryButton.css'

const ManageInventoryButton = () => {
    return (
        <div data-aos="zoom-in-down">
            <div className='text-center rounded-3
                col-lg-10 col-md-10 col-sm-12 col-12 mx-auto'>
                <div className='manageInventoriesAllItems'>
                    <div data-aos="zoom-in">
                        <div className='fs-1 text-white fw-bolder'>
                            Do you want to see all the items?
                        </div>
                    </div>
                    <h6 className='text-center mt-3 text-white'>
                        Then click on Manage Inventory button. Find your desired product.
                    </h6>
                    <h6 className='text-center mt-3 text-white'>Happy Buying</h6>
                    <hr className='text-white' style={{ height: '3px' }} />
                    <div className="d-flex justify-content-center">
                        <Link to='/manageInventories'>
                            <Button variant="info" className='btn-lg mb-3 fw-bolder'>
                                Manage Inventory
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageInventoryButton;