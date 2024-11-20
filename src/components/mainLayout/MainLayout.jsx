import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';

const MainLayout = () => {
    useEffect(() => {
        Aos.init({
            duration: 800,
            once: true,
        });
    }, []);
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;