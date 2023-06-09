import React, { useState } from 'react';
import { Button, ButtonGroup, Col, Container, Form, InputGroup, Nav, NavItem, NavLink, Navbar, Offcanvas, Row } from 'react-bootstrap';

const EventsBottomNavbar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar variant='light' bg='light' className='shadow-lg px-1 fixed-bottom text-light'>
      <Container className='justify-content-between' fluid>
        <Navbar.Brand href="/" className='navbarBrandText'>
          <i className='bi bi-bar-chart-steps'></i>
        </Navbar.Brand>

        <Button
          variant='outline-dark'
          className='fs-4 py-0 px-5 rounded border-0 '
        >
          <i className='bi bi-plus-circle-fill' ></i>
        </Button>


        <Button variant="outline-dark"
          onClick={handleShow}
          className='fs-4 py-0 px-2 rounded border-0'
        >
          <i className='bi bi-list' ></i>
        </Button>

        <Offcanvas show={show} onHide={handleClose} placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className='navbarBrandText' >
              <i className='bi bi-bar-chart-steps'></i> timegraph
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>

        {/* <ButtonGroup>
          <Button
            // onClick={handleShowCreateTimelineModal}
            type='button'
            variant='outline-light'
            className='border-0'
          >
            <i className='bi bi-zoom-in' ></i>
          </Button>
          <Button
            // onClick={handleShowCreateTimelineModal}
            type='button'
            variant='outline-light'
            className='border-0'
          >
            Fit
          </Button>
          <Button
            // onClick={handleShowCreateTimelineModal}
            type='button'
            variant='outline-light'
            className='border-0'
          >
            <i className='bi bi-zoom-out' ></i>
          </Button>
        </ButtonGroup> */}




      </Container>
    </Navbar>
  );
};

export default EventsBottomNavbar;