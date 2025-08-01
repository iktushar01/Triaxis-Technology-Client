import React from 'react';
import Slider from './Slider';
import WhatWeOffer from './WhatWeOffer';
import OurProcess from './OurProcess';
import ContactOurTeam from './ContactOurTeam';
import Faq from './Faq';

const Home = () => {
    return (
        <div>
            <Slider/>
            <WhatWeOffer/>
            <OurProcess/>
            <Faq/>
            <ContactOurTeam/>
        </div>
    );
};

export default Home;