import React from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h1>rana:-{serviceId}</h1>
            <div data-aos="zoom-in-down">
                <div className='text-center rounded-3
                col-lg-10 col-md-10 col-sm-12 col-12 mx-auto'>
                    <div className='delivered'>
                        <div data-aos="zoom-in">
                            <div className='fs-1 text-white'>
                                Do you really want to Delivered it?
                            </div>
                        </div>
                        <h2 className='text-center mt-3 text-white'>Service id:{serviceId}</h2>
                        <hr className='text-white' style={{ height: '3px' }} />
                        <div className="d-flex justify-content-center">
                            <Button variant="primary" className='btn-lg mb-3'>
                                Delivered
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-white' data-aos="flip-left">
                <form>
                    <div className='mx-auto m-5 border p-5 rounded-3 col-lg-10 col-md-10 col-sm-12 col-12 mx-auto'>
                        <h1 className='text-center'>
                            Please Details Information for added
                        </h1>
                        <div className='serviceAdd-input'>
                            <div className="mb-3 ms-3">
                                <label for="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your name" />
                            </div>
                            <div className="mb-3 ms-3">
                                <label for="exampleFormControlInput1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className=" ms-3">
                                <label for="exampleFormControlInput1" className="form-label">Service</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="service" />
                            </div>
                        </div>
                        <div className='d-flex justify-content-center '>
                            <div className="mb-3 ms-3">
                                <label for="exampleFormControlInput1" className="form-label">Address</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Address" />
                            </div>
                            <div className="mb-3 ms-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Phone" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Write your message here</label>
                            <textarea className="form-control rounded-3 " id="exampleFormControlTextarea1" rows="7" placeholder='Message'></textarea>
                        </div>
                        <div className='d-flex justify-content-center mt-3'>
                            <input className="btn btn-primary btn-lg" type="submit" value="Add Service" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ServiceDetails;