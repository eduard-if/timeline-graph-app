import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTimeline } from '../actions/timelineActions';
import { HiExclamationCircle } from 'react-icons/hi2';

const TimelineDeleteModal = ({ showDelete, handleCloseDelete, itemId }) => {
    const dispatch = useDispatch();

    const timelineList = useSelector(state => state.timelineList);
    const { timelines } = timelineList;
    const timeline = timelines.filter(timeline => timeline.id === itemId);
    const { title, description, imageUrl, id, bgColor, textColor, titleColor, borderColor } = timeline[0];


    const handleSubmitDelete = () => {
        dispatch(deleteTimeline(id));
        handleCloseDelete();
    }




    return (
        <Modal show={showDelete} onHide={handleCloseDelete} scrollable='true' centered>
            <Modal.Header closeButton className='bg-danger border-0 text-light shadow-sm'>
                <Modal.Title  >
                    <i className='bi bi-trash3-fill pe-2' ></i>
                    Delete Timeline
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container >
                    <Row>
                        <Col className='text-decoration-underline text-center'>
                            Are you sure you want to delete this timeline?
                        </Col>
                    </Row>

                    <Row>
                        <Col className='fw-bold fs-4 text-center mt-3' >
                            {title}
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer className='justify-content-center border-0' >
                <Button variant='light' className='rounded shadow-sm' onClick={handleCloseDelete}>
                    Cancel <i className='bi bi-x-lg' ></i>
                </Button>
                <Button variant='danger' className='rounded shadow-sm' onClick={handleSubmitDelete}>
                    <HiExclamationCircle className='fs-5 align-top mt-1' /> Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TimelineDeleteModal;