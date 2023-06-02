import React from 'react';
import HomeNavbar from '../components/HomeNavbar';
import { Container } from 'react-bootstrap';
import BottomNavbar from '../components/BottomNavbar';
import HomeTimelineContainer from '../components/HomeTimelineContainer';
import HomeToolbar from '../components/HomeToolbar';

const HomePage = () => {
    // implement the modal create timeline here to keep in sync with toolbar and bottom navbar
    return (
        <div >
            <HomeNavbar />
            <HomeToolbar />
            <BottomNavbar />
            <Container>
                <HomeTimelineContainer />
            </Container>

        </div>
    );
};

export default HomePage;