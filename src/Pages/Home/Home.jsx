import React from 'react';
import Slider from './Slider';
import WhatWeOffer from './WhatWeOffer';
import OurProcess from './OurProcess';
import ContactOurTeam from './ContactOurTeam';

const Home = () => {
    return (
        <div>
            <Slider/>
            <WhatWeOffer/>
            <OurProcess/>
            <ContactOurTeam/>
        </div>
    );
};

export default Home;