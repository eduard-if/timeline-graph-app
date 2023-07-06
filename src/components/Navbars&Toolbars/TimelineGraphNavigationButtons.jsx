import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TimelineGraphNavigationButtons = ({
    handleShowEventsList, scrollLeft, zoomIn, fit, zoomOut, scrollRight,
}) => {
    return (
        <div className='d-flex flex-row justify-content-center fixed-bottom mb-5'>
            <Link to={`events-list`}  >
                <Button
                    onClick={handleShowEventsList}
                    variant='light'
                    className='fs-4 py-0 px-2 border-0'
                >
                    <i className='bi bi-card-list' ></i>
                </Button>
            </Link>

            <ButtonGroup className='d-flex mx-1 mb-1'>

                <Button onClick={scrollLeft}
                    variant='light'
                    className='border-0'
                >
                    <i className='bi bi-chevron-left' ></i>
                </Button>
                <Button
                    onClick={zoomIn}
                    variant='light'
                    className='border-0'
                >
                    <i className='bi bi-zoom-in' ></i>
                </Button>
                <Button
                    onClick={fit}
                    variant='light'
                    className='border-0'
                >
                    Fit
                </Button>
                <Button
                    onClick={zoomOut}
                    type='button'
                    variant='light'
                    className='border-0'
                >
                    <i className='bi bi-zoom-out' ></i>
                </Button>
                <Button onClick={scrollRight}
                    variant='light'
                    className='border-0'
                >
                    <i className='bi bi-chevron-right' ></i>
                </Button>

            </ButtonGroup>
            <Button
                variant="light"
                className='fs-4 py-0 px-2 border-0'
            >
                <i className='bi bi-diagram-3' ></i>
            </Button>
        </div>
    );
};

export default TimelineGraphNavigationButtons;