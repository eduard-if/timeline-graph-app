import React, { useState } from 'react';
import { Button, Card, Container, Form, InputGroup, Navbar, Offcanvas, } from 'react-bootstrap';
import EventsCreateModal from '../Modals/EventsCreateModal';
import { Link } from 'react-router-dom';

const TimelinePageBottomNavbar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEventsCreateModal, setShowEventsCreateModal] = useState(false);

  const handleCloseEventsCreateModal = () => setShowEventsCreateModal(false);
  const handleShowEventsCreateModal = () => setShowEventsCreateModal(true);

  return (
    <>
      <Navbar variant='' className='px-1 pt-1 pb-1 fixed-bottom text-light eventsBottomNavbar' >
        <Container className='justify-content-between' fluid>
          <Link to={'/'} >
            <Button variant='outline-dark' className='m-0 border-0 px-2 py-0 rounded fs-4' >
              <i className='bi bi-house-door-fill' ></i>
            </Button>
          </Link>


          <Button
            onClick={handleShowEventsCreateModal}
            variant='outline-dark'
            className='fs-4 py-0 px-5 rounded border-0 '
          >
            <i className='bi bi-plus-circle-fill' ></i>
          </Button>


          <Button variant="outline-dark"
            onClick={handleShow}
            className='fs-4 py-0 px-2 rounded border-0'
          >
            <i className='bi bi-sliders' ></i>
          </Button>

          <Offcanvas show={show} onHide={handleClose} placement='end' className='eventsPageOffcanvas'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className='navbarBrandText' >
                <i className='bi bi-bar-chart-steps'></i> timegraph
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Card className='cardTimelineOptions'>

                <Card.Header
                  className='fw-light text-center'
                  style={{ backgroundColor: 'transparent' }}
                >Timeline Options</Card.Header>
                <Card.Body>
                  <InputGroup className='mb-3 mt-2'>
                    <InputGroup.Text className='fw-lighter' style={{ backgroundColor: 'transparent' }} >Axis</InputGroup.Text>
                    <Form.Select
                      aria-label='timeline-axis'
                      size='sm'
                    >
                      <option value='bottom'>Bottom</option>
                      <option value='top'>Top</option>
                      <option value='both'>Both</option>
                      <option value='none'>None</option>
                    </Form.Select>
                  </InputGroup>

                  <InputGroup className='mb-3 mt-2'>
                    <InputGroup.Text className='fw-lighter' style={{ backgroundColor: 'transparent' }} >Item Orientation</InputGroup.Text>
                    <Form.Select
                      aria-label='item-orientation'
                      size='sm'>
                      <option value='bottom'>Bottom</option>
                      <option value='top'>Top</option>
                    </Form.Select>
                  </InputGroup>

                  <InputGroup className='mb-3 border border-dark border-opacity-10 rounded'>
                    <InputGroup.Text className='fw-lighter border-0 border-end' style={{ backgroundColor: 'transparent' }} >Vertical Scrollbar</InputGroup.Text>
                    <div className='d-flex flex-row align-center justify-content-center m-auto' >
                      <Form.Check
                        type='switch'
                        id='vertical-scrollbar'
                      />
                    </div>

                  </InputGroup>
                </Card.Body>

              </Card>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
      <EventsCreateModal
        showEventsCreateModal={showEventsCreateModal}
        handleCloseEventsCreateModal={handleCloseEventsCreateModal} />
    </>
  );
};

export default TimelinePageBottomNavbar;