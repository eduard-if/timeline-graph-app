
import React, { useState } from 'react';
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createEvent } from '../actions/timelineActions';

const EventsCreateModal = ({ showEventsCreateModal, handleCloseEventsCreateModal }) => {
  const [title, setTitle] = useState('asdasd');
  const [content, setContent] = useState('sdsd');
  const [start, setStart] = useState('2023-06-13');
  const [end, setEnd] = useState('2023-06-13');
  const [type, setType] = useState('box');
  const [style, setStyle] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector(state => state.timelineOpen);
  const { loading, error } = data

  const handleSubmit = () => {
    const id = data.timeline.timeline.id
    console.log(id)

    dispatch(createEvent(title, content, start, end, type, id))
    if (!loading) {
      handleCloseEventsCreateModal()
    }
  }

  return (
    <Modal
      show={showEventsCreateModal}
      onHide={handleCloseEventsCreateModal}
      className=''
      scrollable='true'>

      <Modal.Header closeButton className='bg-success text-light'>
        <Modal.Title>
          <i className='bi bi-calendar-range-fill pe-2' ></i>
          New Event
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3' controlId='title'>
            <Form.Label>Content</Form.Label>
            <Form.Control
              type='text'
              placeholder='Your content here'
              value={content}
              onChange={(e) => setContent(e.target.value)}

              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='title'>
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type='date'
              placeholder='Your title here'
              value={start}
              onChange={(e) => setStart(e.target.value)}

              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" type='submit' onClick={handleCloseEventsCreateModal}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleSubmit} >
          Create <i className='ps-1  bi bi-plus-lg'></i>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EventsCreateModal;