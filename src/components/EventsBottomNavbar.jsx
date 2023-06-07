import React from 'react';
import { Button, ButtonGroup, Col, Container, Form, InputGroup, Nav, NavItem, NavLink, Navbar, Row } from 'react-bootstrap';

const EventsBottomNavbar = () => {
    return (
        <Navbar variant='dark' bg='info' className='shadow-lg px-3 fixed-bottom text-light'>
            <Container className='justify-content-between'>
                <Navbar.Brand href="/" className='navbarBrandText'>
                    <i className='bi bi-bar-chart-steps'></i> home
                </Navbar.Brand>

                <ButtonGroup>
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
                </ButtonGroup>




            </Container>
        </Navbar>
    );
};

export default EventsBottomNavbar;