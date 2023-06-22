import React, { useEffect, useState } from 'react';
import HomeNavbar from '../components/HomeNavbar';
import { Button, Container } from 'react-bootstrap';
import BottomNavbar from '../components/BottomNavbar';
import HomeTimelineContainer from '../components/HomeTimelineContainer';
import HomeToolbar from '../components/HomeToolbar';
import CreateTimelineModal from '../components/CreateTimelineModal';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

const HomePage = () => {
  const [showCreateTimelineModal, setShowCreateTimelineModal] = useState(false);
  const md = useMediaQuery({ maxWidth: 992 })

  const handleCloseCreateTimelineModal = () => setShowCreateTimelineModal(false);
  const handleShowCreateTimelineModal = () => setShowCreateTimelineModal(true);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div >
      <HomeNavbar handleShowCreateTimelineModal={handleShowCreateTimelineModal} />
      {/* <HomeToolbar
        handleShowCreateTimelineModal={handleShowCreateTimelineModal} /> */}
      {/* <BottomNavbar
        handleShowCreateTimelineModal={handleShowCreateTimelineModal} /> */}
      <main className='pb-5 '>

        <Container className='pt-4 px-4 pb-4 border border-secondary border-opacity-25 rounded homeContainer'>
          <HomeTimelineContainer />
        </Container>


      </main>
      <Button
        variant='dark'
        className=' rounded-circle px-2 py-1 me-4 fs-6 opacity-75 shadow'
        onClick={handleScrollToTop}
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          scale: '1.2',
          marginBottom: '2rem'
        }}
      >
        <i className='bi bi-chevron-up' ></i>
      </Button>
      <CreateTimelineModal
        showCreateTimelineModal={showCreateTimelineModal}
        handleShowCreateTimelineModal={handleShowCreateTimelineModal}
        handleCloseCreateTimelineModal={handleCloseCreateTimelineModal} />
    </div>
  );
};

export default HomePage;