import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';
import ScrollToTop from '../../Shared/ScrollToTop/ScrollToTop';

const MainLayout = () => {
    return (
        <div>
             <ScrollToTop />
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;