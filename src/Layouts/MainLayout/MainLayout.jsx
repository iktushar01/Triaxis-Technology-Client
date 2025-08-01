import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            navbar
            <Outlet/>
            footer
        </div>
    );
};

export default MainLayout;