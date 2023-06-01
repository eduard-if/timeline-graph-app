import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const CreateTimelineModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>New Timeline</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            autoFocus
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="success" onClick={handleClose}>
                    Create
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateTimelineModal;