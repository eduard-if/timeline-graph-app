import React, { useState } from 'react';
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createTimeline, listTimelines } from '../actions/timelineActions';

const CreateTimelineModal = ({ show, handleClose }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [bgColor, setBgColor] = useState();
    const [borderColor, setBorderColor] = useState();
    const [textColor, setTextColor] = useState();
    const [titleColor, setTitleColor] = useState();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        let timelineData = { title, description, imageUrl, bgColor, borderColor, textColor, titleColor }
        dispatch(createTimeline(timelineData));
        dispatch(listTimelines());
        // navigate(`/timeline/${id}`);
    }

    return (
        <Modal show={show} onHide={handleClose} className='' scrollable='true'>
            <Modal.Header closeButton className='bg-success text-light'>
                <Modal.Title>
                    <i className='bi bi-calendar-range-fill pe-2' ></i>
                    New Timeline
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className='mb-3' controlId='title'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder=''
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            autoFocus
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId='description'
                    >
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as='textarea'
                            rows={3}
                            placeholder='Details or keywords for easier searching'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='imageUrl'>
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Your URL goes here'
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group
                        className='mb-3'
                        controlId='bgColor'
                    >
                        <Row className='justify-content-start'>
                            <Col xs={4}>
                                <Form.Label className='mt-2'>Background color</Form.Label>

                            </Col>
                            <Col xs={1}>
                                <Form.Control
                                    type='color'
                                    value={bgColor}
                                    onChange={(e) => setBgColor(e.target.value)}
                                />

                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group
                        className='mb-3'
                        controlId='textColor'
                    >
                        <Row className='justify-content-start'>
                            <Col xs={4}>
                                <Form.Label className='mt-2'>Text color</Form.Label>

                            </Col>
                            <Col xs={1}>
                                <Form.Control
                                    type='color'
                                    value={textColor}
                                    onChange={(e) => setTextColor(e.target.value)}
                                />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group
                        className='mb-3'
                        controlId='titleColor'
                    >
                        <Row className='justify-content-start'>
                            <Col xs={4}>
                                <Form.Label className='mt-2'>Title color</Form.Label>

                            </Col>
                            <Col xs={1}>
                                <Form.Control
                                    type='color'
                                    value={titleColor}
                                    onChange={(e) => setTitleColor(e.target.value)}

                                />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group
                        className='mb-3'
                        controlId='borderColor'
                    >
                        <Row className='justify-content-start'>
                            <Col xs={4}>
                                <Form.Label className='mt-2'>Border color</Form.Label>

                            </Col>
                            <Col xs={1}>
                                <Form.Control
                                    type='color'
                                    value={borderColor}
                                    onChange={(e) => setBorderColor(e.target.value)}
                                />
                            </Col>
                        </Row>
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" type='submit' onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="success" onClick={handleSubmit} >
                    Create <i className='ps-1  bi bi-plus-lg'></i>
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateTimelineModal;