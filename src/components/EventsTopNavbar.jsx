import React from 'react'
import { Button, Col, Container, Form, InputGroup, Nav, NavItem, NavLink, Navbar, Row } from 'react-bootstrap';

const EventsTopNavbar = () => {
    return (
        <Navbar
            variant='light'
            bg='light'
            // className='rounded-pill shadow-sm mx-3 mt-3 sticky-top homeNavbar'
            className='shadow-sm sticky-top homeNavbar py-1'
        >
            <Container className='justify-content-evenly'>
                <Navbar.Brand href="#" className='navbarBrandText d-none d-sm-none d-md-block'>
                    <i className='bi bi-bar-chart-steps'></i> timegraph
                </Navbar.Brand>

                <InputGroup className='w-75'>
                    <Form.Control
                        type='search'
                        placeholder='Search'
                        className='bg-light'
                        aria-label='Search'
                    />
                    <InputGroup.Text className='bg-light'>
                        <i className='bi bi-search' ></i>
                    </InputGroup.Text>
                </InputGroup>

                <NavLink className='fs-4 ps-5 d-none d-sm-none d-md-block'>
                    <i className='bi bi-person-circle '></i>
                </NavLink>

            </Container>
        </Navbar>
    );
};

export default EventsTopNavbar;