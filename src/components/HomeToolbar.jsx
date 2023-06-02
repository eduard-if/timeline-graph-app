import React, { useState } from 'react';
import { Button, Nav, NavDropdown } from 'react-bootstrap';
import CreateTimelineModal from './CreateTimelineModal';

const HomeToolbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Nav className='justify-content-center mb-4 mt-1 ' >
                <div className='border-bottom px-5 py-1 d-none d-sm-none d-md-block'>
                    <Nav.Item>
                        <Button
                            onClick={handleShow}
                            variant='outline-dark'
                            className='rounded-pill border-0 customButtonPadding buttonHoverShadow'
                        >
                            <span
                                className='fs-6 align-middle pe-2'
                            >New</span>
                            <i className='bi bi-plus-circle-fill fs-4 align-middle'></i>
                        </Button>
                    </Nav.Item>
                    {/* 
                    <NavDropdown title="Sort" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Last Updated Descending</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Last Updated Ascending</NavDropdown.Item>
                    </NavDropdown> */}

                </div>
            </Nav >
            <CreateTimelineModal show={show} handleClose={handleClose} />
        </>
    );
};

export default HomeToolbar;