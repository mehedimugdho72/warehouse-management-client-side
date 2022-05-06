import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div>
            <div>
                <div>
                    <div>
                        <div className=' text-center mt-5 rounded-3
                col-lg-5 col-md-10 col-sm-12 col-12 mx-auto' data-aos="flip-up">
                            <div className='service services-details shadow-lg' data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <img src={product.img} alt="" />
                                <h3>{product.name}</h3>
                                <h5>Price:-$ {product.price}</h5>
                                <h5>Quantity:-{product.quantity}</h5>
                                <h5>ID:-{product._id}</h5>
                                <h5>Sold:-{product.sold}</h5>
                                <p>{product.description}</p>
                                <h5>Supplier:-{product.supplierName}</h5>
                                <button type="button" style={{ borderRadius: "50px" }} className="btn btn-info btn-md">Book {product.name}</button>
                            </div>
                        </div>

                    </div>
                    <div data-aos="zoom-in-down">
                        <div className='text-center rounded-3
                col-lg-10 col-md-10 col-sm-12 col-12 mx-auto'>
                            <div className='delivered'>
                                <div data-aos="zoom-in">
                                    <div className='fs-1 text-white'>
                                        Do you really want to Delivered it?
                                    </div>
                                </div>
                                <h2 className='text-center mt-3 text-white'>Product name: {product.name}</h2>
                                <h2 className='text-center mt-3 text-white'>Quantity: {product.quantity}</h2>
                                <hr className='text-white' style={{ height: '3px' }} />
                                <div className="d-flex justify-content-center">
                                    <Button variant="info" className='btn-lg mb-3'>
                                        Delivered
                                    </Button>
                                </div>
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
                                    <label for="exampleFormControlInput1" className="form-label">image</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="image URL" />
                                </div>
                                <div className=" ms-3">
                                    <label for="exampleFormControlInput1" className="form-label">Short description</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="description" />
                                </div>
                            </div>
                            <div className='justify-content-center serviceAdd-input'>
                                <div className="mb-3 ms-3">
                                    <label for="exampleFormControlInput1" className="form-label">Price</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Price" />
                                </div>
                                <div className="mb-3 ms-3">
                                    <label for="exampleFormControlInput1" className="form-label">Quantity</label>
                                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Quantity" />
                                </div>
                                <div className="mb-3 ms-3">
                                    <label for="exampleFormControlInput1" className="form-label">Supplier name</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Supplier name" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Write your message here</label>
                                <textarea className="form-control rounded-3 " id="exampleFormControlTextarea1" rows="7" placeholder='Message' readOnly></textarea>
                            </div>
                            <div className='d-flex justify-content-center mt-4'>
                                <input className="btn btn-info btn-lg" type="submit" value="Add Service" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;