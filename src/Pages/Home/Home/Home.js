import React from 'react';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';
import ManageInventoryButton from '../ManageInventoryButton/ManageInventoryButton';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ManageInventoryButton></ManageInventoryButton>
            <Facilities></Facilities>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;