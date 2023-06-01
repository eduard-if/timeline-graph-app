import React from 'react';
import { Button, Col, Container, Form, InputGroup, Nav, NavItem, NavLink, Navbar, Row } from 'react-bootstrap';

const BottomNavbar = () => {
    return (
        <Navbar variant='light' bg='light' className='shadow px-3 fixed-bottom  d-md-none d-lg-none'>
            <Container className='justify-content-between'>
                <Navbar.Brand href="#" className='navbarBrandText'>
                    <i className='bi bi-bar-chart-steps'></i>
                </Navbar.Brand>

                <Button
                    type='button'
                    variant='outline-dark'
                    className='border-0 btn-sm  px-3'
                >
                    <i className='bi bi-plus-circle-fill myPlusCircle' ></i>
                </Button>

                <NavLink className='fs-4 '>
                    <i className='bi bi-person-circle '></i>
                </NavLink>

            </Container>
        </Navbar>
    );
};

export default BottomNavbar;