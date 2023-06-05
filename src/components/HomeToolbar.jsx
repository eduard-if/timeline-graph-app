import React, { useState } from 'react';
import { Button, Nav, NavDropdown } from 'react-bootstrap';

const HomeToolbar = ({ handleShowCreateTimelineModal, handleShowListView, showListView }) => {
    // receive the functions for triggering the Create Timeline Modal and handling the componenet View Mode
    // receive the state of the View Mode to switch the handleShowListView button content

    return (
        <>
            <Nav className='justify-content-center mt-3' >

                <Nav.Item >
                    <Button
                        variant='outline-secondary'
                        onClick={handleShowListView}
                        className='rounded-pill border-0 customButtonPadding mt-2 px-3'
                    >

                        {showListView
                            ? (<>
                                <i
                                    className='bi bi-grid-fill align-middle '
                                    style={{
                                        fontSize: 'larger',
                                        paddingRight: '0.1rem'
                                    }}></i>
                                <span className='align-middle'>
                                    Grid
                                </span>
                            </>
                            ) : (
                                <>
                                    <i
                                        className='bi bi-list-task align-middle'
                                        style={{
                                            fontSize: 'larger',
                                            paddingRight: '0.1rem'
                                        }}></i>
                                    <span className='align-middle'>
                                        List
                                    </span>
                                </>
                            )
                        }


                    </Button>
                </Nav.Item>

                <Nav.Item className='d-none d-sm-none d-md-block mx-1'>
                    <Button
                        onClick={handleShowCreateTimelineModal}
                        variant='outline-dark'
                        className='rounded-pill border-0 customButtonPadding buttonHoverShadow'
                    >
                        <span
                            className='fs-6 align-middle pe-2'
                        >New</span>
                        <i className='bi bi-plus-circle-fill fs-4 align-middle'></i>
                    </Button>
                </Nav.Item>

                <Nav.Item>
                    <Button
                        variant='outline-secondary'
                        // onClick={handleSort}
                        className='rounded-pill border-0 customButtonPadding mt-2 px-3 '
                    >
                        <i
                            className='bi bi-filter-left '
                            style={{
                                fontSize: 'larger',
                                paddingRight: '0.2rem',

                            }}></i>
                        <span className=''>Sort</span>
                    </Button>
                </Nav.Item>
            </Nav >
            <hr
                className=' mb-4 pt-0 w-25 mx-auto'
                style={{
                    opacity: '15%'
                }}
            ></hr>
        </>
    );
};

export default HomeToolbar;