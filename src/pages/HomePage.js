import React, { useEffect, useState } from 'react';
import HomeNavbar from '../components/HomeNavbar';
import { Container } from 'react-bootstrap';
import BottomNavbar from '../components/BottomNavbar';
import HomeTimelineContainer from '../components/HomeTimelineContainer';
import HomeToolbar from '../components/HomeToolbar';
import CreateTimelineModal from '../components/CreateTimelineModal';
import { useSelector } from 'react-redux';

const HomePage = () => {
    const [showCreateTimelineModal, setShowCreateTimelineModal] = useState(false);

    const handleCloseCreateTimelineModal = () => setShowCreateTimelineModal(false);
    const handleShowCreateTimelineModal = () => setShowCreateTimelineModal(true);

    return (
        <div >
            <HomeNavbar />
            <HomeToolbar
                handleShowCreateTimelineModal={handleShowCreateTimelineModal} />
            <BottomNavbar
                handleShowCreateTimelineModal={handleShowCreateTimelineModal} />
            <Container>
                <HomeTimelineContainer />
            </Container>
            <CreateTimelineModal
                showCreateTimelineModal={showCreateTimelineModal}
                handleShowCreateTimelineModal={handleShowCreateTimelineModal}
                handleCloseCreateTimelineModal={handleCloseCreateTimelineModal} />
        </div>
    );
};

export default HomePage;