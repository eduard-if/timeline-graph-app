import React, { useEffect, useState } from 'react';
import HomeNavbar from '../components/HomeNavbar';
import { Button, Col, Container, ListGroup, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import CreateTimelineModal from '../components/CreateTimelineModal';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
import { listTimelines } from '../actions/timelineActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import HomeTimelineCard from '../components/HomeTimelineGridCard';
import HomeTimelineListCard from '../components/HomeTimelineListCard';

const HomePage = () => {
  const [showCreateTimelineModal, setShowCreateTimelineModal] = useState(false);
  const md = useMediaQuery({ maxWidth: 992 })
  const lg = useMediaQuery({ minWidth: 1200 })

  const handleCloseCreateTimelineModal = () => setShowCreateTimelineModal(false);
  const handleShowCreateTimelineModal = () => setShowCreateTimelineModal(true);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  }

  const dispatch = useDispatch();
  const location = useLocation();

  const timelineList = useSelector(state => state.timelineList);
  const { error, loading, timelines } = timelineList;


  useEffect(() => {
    dispatch(listTimelines());
  }, [dispatch, location]);


  return (
    <div >
      <HomeNavbar handleShowCreateTimelineModal={handleShowCreateTimelineModal} />
      <main className='pb-5 '>
        <Container
          className=' px-4 pb-4'>

          {loading ? <Loader /> :

            timelines.length === 0 ? <Message variant='secondary' >
              <h1 className='text-center' >No Timelines</h1>
            </Message> :
              error ? <Message variant='danger'>{error}</Message> :


                (

                  <Tab.Container defaultActiveKey='grid'>
                    {/*timelines grid card and list card tabs*/}
                    <Row>
                      <Col xs={12} className='mb-5' >
                        <Nav variant='underline' className='justify-content-center' >
                          <Nav.Item>
                            <Nav.Link eventKey='grid' className='px-3' >
                              <i className='bi bi-grid' ></i>
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey='list' className='px-3'>
                              <i className='bi bi-list' ></i>
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>

                      <Col xs={12}>
                        <Tab.Content>
                          <Tab.Pane eventKey='grid' >
                            <Row >
                              {timelines.map((timeline, index) => (

                                <Col xs={12} sm={12} md={6} lg={4} xl={3} className='mb-4' key={index} >
                                  <HomeTimelineCard data={timeline} />
                                </Col>

                              ))}

                            </Row>
                          </Tab.Pane>

                          <Tab.Pane eventKey='list' >
                            <div className='d-flex justify-content-center'>
                              <ListGroup variant='flush' className={!md ? 'w-50' : 'w-100'} >
                                {timelines.map((timeline, index) => (
                                  <ListGroup.Item key={index} className='py-3 bg-transparent'>
                                    <HomeTimelineListCard data={timeline} />
                                  </ListGroup.Item>
                                ))}
                              </ListGroup>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                )}


        </Container>
      </main>

      {/*create timeline and scroll to top buttons */}
      <Button
        variant='primary'
        className=' rounded-circle px-2 py-1 me-4 fs-6 opacity-75  shadow-sm'
        onClick={handleScrollToTop}
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          scale: '1.2',
          marginBottom: '6rem'
        }}
      >
        <i className='bi bi-chevron-up' ></i>
      </Button>

      <Button
        variant='dark'
        className=' rounded-circle px-2 py-1 me-4 fs-6  shadow-sm'
        onClick={handleShowCreateTimelineModal}
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          scale: '1.5',
          marginBottom: '2rem',
        }}
      >
        <i className='bi bi-plus-lg' ></i>
      </Button>

      <CreateTimelineModal
        showCreateTimelineModal={showCreateTimelineModal}
        handleShowCreateTimelineModal={handleShowCreateTimelineModal}
        handleCloseCreateTimelineModal={handleCloseCreateTimelineModal} />
    </div >
  );
};

export default HomePage;