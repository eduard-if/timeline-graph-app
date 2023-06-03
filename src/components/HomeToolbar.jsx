import React, { useState } from 'react';
import { Button, Nav, NavDropdown } from 'react-bootstrap';
import CreateTimelineModal from './CreateTimelineModal';

const HomeToolbar = ({ handleShow }) => {
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
                </div>
            </Nav >
        </>
    );
};

export default HomeToolbar;