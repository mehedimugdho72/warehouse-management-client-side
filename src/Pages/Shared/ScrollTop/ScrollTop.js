import React from 'react';
import scroll from '../../../Assets/images/scrollTop/scrollTo.png'
import './ScrollTop.css'

const ScrollTop = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    return (
            <div onClick={scrollToTop}>
                <img className='scrollToTop' style={{ height: "4rem", width: "4rem" }} src={scroll} alt="" />
            </div>
    );
};

export default ScrollTop;