import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Assets/images/banner/slide01-1.jpg'
import banner2 from '../../../Assets/images/banner/slide02-1.jpg'
import banner3 from '../../../Assets/images/banner/slide03-1.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img style={{ maxHeight: "600px" }}
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='description'>
                        <h1 className='text-white'>For People Who Love
                            Their Home</h1>
                        <p className='text-white'>Star Furniture first opened its doors in 2006, in Miami, Florida. Since our inception, we have worked meticulously to improve both our internal processes and our outward appearance.</p>
                        <button className='rounded-3 btn btn-lg'>MORE INFORMATION</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ maxHeight: "600px" }}
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='description'>
                        <h1 className='text-white'>Quality Doesn’t Have
                            To Be Expensive</h1>
                        <p className='text-white'>Star Furniture first opened its doors in 2006, in Miami, Florida. Since our inception, we have worked meticulously to improve both our internal processes and our outward appearance.</p>
                        <button className='rounded-3 btn btn-lg'>MORE INFORMATION</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ maxHeight: "600px" }}
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='description'>
                        <h1 className='text-white'>Furniture Inspired By
                            Innovation</h1>
                        <p className='text-white'>Star Furniture first opened its doors in 2006, in Miami, Florida. Since our inception, we have worked meticulously to improve both our internal processes and our outward appearance.</p>
                        <button className=' rounded-3 btn btn-lg'>MORE INFORMATION</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;