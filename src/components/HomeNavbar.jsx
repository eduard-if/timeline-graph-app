import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, InputGroup, Nav, NavItem, NavLink, Navbar, Offcanvas, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { gridView, listView, tableView } from '../actions/uiActions';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const HomeNavbar = () => {
  const md = useMediaQuery({ maxWidth: 992 })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  return (
    <>
      <Nav
        style={{ backdropFilter: 'blur(2px) grayscale(100%)' }}
        className='sticky-top justify-content-center mb-4 shadow-sm'
      >
        <div className='d-flex text-dark  px-3 pt-2 pb-2 fw-bold justify-content-between w-100 ' >
          <Link to={'/'} className='navbarBrandText fs-5 text-dark align-middle text-nowrap' style={{ textDecoration: 'none' }}>
            <i className='bi bi-bar-chart-steps'></i> {!md && (<span>timegraph</span>)}
          </Link>

          <Form className='w-50' >
            <Form.Control

              size='sm'
              type='search'
              placeholder='Search...'
              className='bg-light rounded'
              aria-label='Search'
            />
          </Form>



          <Button
            variant='dark'
            className=' bg-transparent text-dark border-0 p-0 px-2 fs-5'
            onClick={handleShow}>
            <i className='bi bi-person-circle ' ></i>
          </Button>

        </div>

      </Nav>
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
            </Card.Body>
          </Card>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HomeNavbar;