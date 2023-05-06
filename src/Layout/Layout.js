import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='max-w-screen-xl mx-3 lg:mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;