import React, { useState } from 'react';
import HomeNavbar from '../components/HomeNavbar';
import { Container } from 'react-bootstrap';
import BottomNavbar from '../components/BottomNavbar';
import HomeTimelineContainer from '../components/HomeTimelineContainer';
import HomeToolbar from '../components/HomeToolbar';
import CreateTimelineModal from '../components/CreateTimelineModal';

const HomePage = () => {
    // states for the Create Timeline Modal & the type of Component View
    const [showCreateTimelineModal, setShowCreateTimelineModal] = useState(false);
    const [showListView, setShowListView] = useState(false);

    const handleCloseCreateTimelineModal = () => setShowCreateTimelineModal(false);
    const handleShowCreateTimelineModal = () => setShowCreateTimelineModal(true);

    const handleShowListView = () => {
        if (showListView) {
            setShowListView(false);
        } else {
            setShowListView(true);
        }

    }
    // passing in the states and functions for handling the show & type of view
    return (
        <div >
            <HomeNavbar />
            <HomeToolbar
                handleShowCreateTimelineModal={handleShowCreateTimelineModal}
                handleShowListView={handleShowListView}
                showListView={showListView}
            />
            <BottomNavbar
                handleShowCreateTimelineModal={handleShowCreateTimelineModal} />
            <Container>
                <HomeTimelineContainer showListView={showListView} />
            </Container>
            <CreateTimelineModal
                showCreateTimelineModal={showCreateTimelineModal}
                handleShowCreateTimelineModal={handleShowCreateTimelineModal}
                handleCloseCreateTimelineModal={handleCloseCreateTimelineModal} />
        </div>
    );
};

export default HomePage;