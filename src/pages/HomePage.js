import React from 'react';
import HomeNavbar from '../components/HomeNavbar';
import { Container } from 'react-bootstrap';
import BottomNavbar from '../components/BottomNavbar';

const HomePage = () => {
    return (
        <div >
            <HomeNavbar />
            <BottomNavbar />
        </div>
    );
};

export default HomePage;