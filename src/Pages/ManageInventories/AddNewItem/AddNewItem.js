import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AddNewItem.css';

const AddNewItem = () => {
    return (
        <div data-aos="zoom-in-down">
            <div className='text-center rounded-3
            col-lg-10 col-md-10 col-sm-12 col-12 mx-auto mt-5'>
                <div className='addNewItems'>
                    <div data-aos="zoom-in">
                        <div className='fs-1 text-white fw-bolder'>
                            Do you want to add a new item to inventory?
                        </div>
                    </div>
                    <h6 className='text-center mt-3 text-white'>
                        Then click on Add New Items button and add an item.
                    </h6>
                    <h6 className='text-center mt-3 text-white'>
                        Take Adding New experience</h6>
                    <hr className='text-white' style={{ height: '3px' }} />
                    <div className="d-flex justify-content-center">
                        <Link to='/addService'>
                            <Button variant="info" className='btn-lg mb-3 fw-bolder'>
                                ADD NEW ITEMS
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewItem;