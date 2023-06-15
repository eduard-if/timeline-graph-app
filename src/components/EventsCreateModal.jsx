
import React, { useState } from 'react';
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createEvent } from '../actions/timelineActions';

const EventsCreateModal = ({ showEventsCreateModal, handleCloseEventsCreateModal }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [start, setStart] = useState('2023-06-13');
  const [end, setEnd] = useState('2023-06-13');
  const [type, setType] = useState('box');
  const [bgColor, setBgColor] = useState('');
  const [textColor, setTextColor] = useState('');
  const [borderColor, setBorderColor] = useState('');

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
      scrollable='true'
      size='lg'
    >

      <Modal.Header closeButton className='bg-success text-light'>
        <Modal.Title>
          <i className='bi bi-calendar-range-fill pe-2' ></i>
          New Event
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3' controlId='content'>
            <Form.Label>Text Content</Form.Label>
            <Form.Control
              type='text'
              placeholder='What you see on the Timeline'
              value={content}
              onChange={(e) => setContent(e.target.value)}

              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='type'>
            <Form.Label>Type</Form.Label>
            <Form.Select aria-label='select-event-type' onChange={(e) => setType(e.target.value)} value={type}>
              <option value='box'>Box</option>
              <option value='point'>Point</option>
              <option value='range'>Range</option>
              <option value='background'>Background</option>
            </Form.Select>

          </Form.Group>
          <Form.Group className='mb-3' controlId='start'>
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type='date'
              placeholder='Your title here'
              value={start}
              onChange={(e) => setStart(e.target.value)}

              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='end'>
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type='date'
              placeholder='Your title here'
              value={end}
              onChange={(e) => setEnd(e.target.value)}


            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='title'>
            <Form.Label>Hover Text</Form.Label>
            <Form.Control
              type='text'
              placeholder='Shows when you hover over an event'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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