import React, { useState } from 'react';
import HomeNavbar from '../components/HomeNavbar';
import { Container } from 'react-bootstrap';
import BottomNavbar from '../components/BottomNavbar';
import HomeTimelineContainer from '../components/HomeTimelineContainer';
import HomeToolbar from '../components/HomeToolbar';
import CreateTimelineModal from '../components/CreateTimelineModal';

const HomePage = () => {
    // implement the modal create timeline here to keep in sync with toolbar and bottom navbar
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div >
            <HomeNavbar />
            <HomeToolbar handleShow={handleShow} />
            <BottomNavbar handleShow={handleShow} />
            <Container>
                <HomeTimelineContainer />
            </Container>
            <CreateTimelineModal show={show} handleShow={show} handleClose={handleClose} />
        </div>
    );
};

export default HomePage;