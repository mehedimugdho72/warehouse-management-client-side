import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ServiceDetails.css';
import ReactImageMagnify from 'react-image-magnify';

const ServiceDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({})


    // Single product
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

                        <div className=' mt-5 rounded-3
                col-lg-11 col-md-10 col-sm-12 col-12 mx-auto' data-aos="flip-up">
                            <div className='service services-details shadow-lg' data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <div>
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src: product.img
                                        },
                                        largeImage: {
                                            src: product.img,
                                            width: 1200,
                                            height: 1800
                                        }
                                    }} />
                                </div>
                                <div className='ms-3'>
                                    <h3>{product.name}</h3>
                                    <h5>Price:-$ {product.price}</h5>
                                    <h5>Quantity:-{product.quantity}</h5>
                                    <h5>ID:-{product._id}</h5>
                                    <h5>Sold:-{product.sold}</h5>
                                    <p>{product.description}</p>
                                    <h5>Supplier:-{product.supplierName}</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div data-aos="zoom-in-down">
                        <div className='text-center mt-5 rounded-3
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
                                    <Button variant="info" className='btn-lg mb-3 fw-bolder'>
                                        Delivered
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-down">
                    <div className='text-center rounded-3 mb-5 mt-5
                col-lg-10 col-md-10 col-sm-12 col-12 mx-auto'>
                        <form className='quantityAdded'>
                            <h1>Quantity:- {product.name}</h1>
                            <input type="text" name="name" className='mt-1 text-center' style={{ height: "50px", width: "17rem", borderRadius: "10px" }} placeholder="Quantity Added" />
                            <hr className='text-white' style={{ height: '3px' }} />
                            <input 
                             type="submit" value="Restock Inventory" className='mb-3 fw-bolder bg-info rounded-3 border-0'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;