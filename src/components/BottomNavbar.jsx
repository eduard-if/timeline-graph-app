import React from 'react';
import { Button, Col, Container, Form, InputGroup, Nav, NavItem, NavLink, Navbar, Row } from 'react-bootstrap';

const BottomNavbar = ({ handleShowCreateTimelineModal }) => {
  return (
    <Navbar variant='light' bg='light' className='shadow px-1 fixed-bottom  d-md-none d-lg-none'>
      <Container className='justify-content-between' fluid>
        <Navbar.Brand href='/' className='navbarBrandText'>
          <i className='bi bi-bar-chart-steps'></i>
        </Navbar.Brand>

        <Button
          onClick={handleShowCreateTimelineModal}
          variant='outline-dark'
          className='fs-4 py-0 px-5 rounded border-0 '
        >
          <i className='bi bi-plus-circle-fill' ></i>
        </Button>

        <NavLink className='fs-4 py-0 px-2 rounded border-0'>
          <i className='bi bi-person-circle '></i>
        </NavLink>

      </Container>
    </Navbar>
  );
};

export default BottomNavbar;