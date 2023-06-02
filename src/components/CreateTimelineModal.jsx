import React, { useState } from 'react';
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CreateTimelineModal = ({ show, handleClose }) => {
    const [title, setTitle] = useState('1');
    let id = title

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate(`/timeline/${id}`);
    }

    return (
        <Modal show={show} onHide={handleClose} className='' scrollable='true'>
            <Modal.Header closeButton className='bg-success text-light'>
                <Modal.Title>New Timeline</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className='mb-3' controlId='title'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder=''
                            autoFocus
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId='description'
                    >
                        <Form.Label>Description</Form.Label>
                        <Form.Control as='textarea' rows={3} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='title'>
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder=''
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
                                    rows={3} />
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
                                    rows={3} />
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
                                    rows={3} />
                            </Col>
                        </Row>
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
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