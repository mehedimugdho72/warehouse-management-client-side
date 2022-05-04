import React from 'react';
import './Facilities.css'
import transport from '../../../Assets/images/icon/footer icon/transport_icon.png'
import warranty from '../../../Assets/images/icon/footer icon/warranty_icon.png'
import returns from '../../../Assets/images/icon/footer icon/return.png'
import emi from '../../../Assets/images/icon/footer icon/emi.png'

const Facilities = () => {
    return (
        <div className='choose-container' data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <h1 className='text-center'>
                Why You Should Choose Us?</h1>
            <div className='facilities-container mb-5 '>
                <div className='icon-img'>
                        <div className='icon-revese'>
                            <img src={transport} alt="" />
                            <div className='description'>
                                <p>Free shipping</p>
                                <p>Shipping in 5 days</p>
                            </div>
                        </div>
                    <div className='icon-revese'>
                        <img src={warranty} alt="" />
                        <div className='description'>
                            <p>Upto</p>
                            <p>Life time warranty</p>
                        </div>
                    </div>
                    <div className='icon-revese'>
                        <img src={returns} alt="" />
                        <div className='description'>
                            <p>Money back</p>
                            <p>Refund within 30 days</p>
                        </div>
                    </div>
                    <div className='icon-revese'>
                        <img src={emi} alt="" />
                        <div className='description'>
                            <p>Authorize Products</p>
                            <p>Orginal best products</p>
                        </div>
                    </div>
                </div>
                <div className='horizontal-line'></div>
            </div>
            <div>
                <div>
                    <div>
                        <h2>Express your style</h2>
                        <p>It is our role to help you discover your unique style and ways of expressing it through interior design. Our interior decorating process is creative, fun and inspirational! We’ll get to know you, learn about your needs, the project scope and your desired outcome.</p>
                    </div>
                    <div>
                        <h2>There is room for everyone</h2>
                        <p>Depending upon your spend expectations we can connect you with the very best in finishes, furnishings, art and more. It’s our experience that fuels our creativity. Also from experience we have learned how to suit your needs!</p>
                    </div>
                    <div>
                        <h2>The Beauty Is In the Details</h2>
                        <p>We bring the balance between progressive and timeless designs. But sometimes it’s the smallest of touches that can elevate a room from the “nice” to the “beautiful”.
                            Which the customer is forced to choose.!</p>
                    </div>
                    <div>
                        <h2>Collaboration at the heart</h2>
                        <p>We love to use our experience, knowledge and creativity to work closely with you, bounce ideas around and come together in a finished product that You love</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;