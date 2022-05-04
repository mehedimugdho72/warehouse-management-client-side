import React from 'react';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Facilities></Facilities>
        </div>
    );
};

export default Home;