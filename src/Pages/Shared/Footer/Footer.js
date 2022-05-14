import React from 'react';
import { Flip, Zoom } from 'react-reveal';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div>
                <Zoom top cascade>
                    <h3 className='text-info footer-header'>About Us</h3>
                </Zoom>
                <Flip right cascade>
                    <div className='details'>
                        <p>Who We Are</p>
                        <p>Why Choose Us</p>
                        <p>What We Do</p>
                        <p>Giving Back</p>
                        <p>Media</p>
                        <p>Our Ethos</p>
                        <p>Buy In Bulk</p>
                        <p>Sell With Us</p>
                    </div>
                </Flip>
            </div>
            <div>
                <Zoom top cascade><h3 className='footer-header text-info'>Policies</h3></Zoom>
                <Flip right cascade>
                    <div className='details'>
                        <p>Shipping & Delivery</p>
                        <p>Warranty</p>
                        <p>Privacy Policy</p>
                        <p>Payment & Security</p>
                        <p>Terms Of Use</p>
                        <p>Returns</p>
                    </div>
                </Flip>

            </div>
            <div>
                <Zoom top cascade><h3 className='footer-header text-info'>Customer <br></br>Service</h3> </Zoom>
                <Flip right cascade>
                    <div className='details'>
                        <p>Write a Testimonial</p>
                        <p>Career</p>
                        <p>FaQ's</p>
                        <p>Contact</p>
                        <p>Registered a Complaint</p>
                        <p>Escalate Complaint</p>
                        <p>Visitor Lounge</p>
                    </div>
                </Flip>

            </div>
            <div>
                <Zoom top cascade><h3 className='footer-header text-info'>Contact Us ☎</h3> </Zoom>
                <Flip right cascade>
                    <div className='details'>
                        <p>USA, California 20, First Avenue, California
                        </p>
                        <p>Tel: +7 998 71 150 ##
                        </p>
                        <p>Fax: +7 998 71 150 ##
                        </p>
                        <p>mehedimugdho98@gmail.com</p>
                    </div>
                </Flip>
            </div>
        </div>
    );
};

export default Footer;