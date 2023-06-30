import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { FaFloppyDisk } from 'react-icons/fa6'
import { updateTimeline } from '../../actions/timelineActions';

const TimelineEditModal = ({ itemId, showEdit, handleCloseEdit }) => {
  const dispatch = useDispatch();

  const timelineList = useSelector(state => state.timelineList);
  const { timelines } = timelineList;
  const timeline = timelines.filter(timeline => timeline.id === itemId);
  const { title, description, imageUrl, id, bgColor, textColor, titleColor, borderColor } = timeline[0];

  const [editTitle, setEditTitle] = useState('')
  const [editDescription, setEditDescription] = useState('');
  const [editBackgroundColor, setEditBackgroundColor] = useState('');
  const [editBorderColor, setEditBorderColor] = useState('');
  const [editTextColor, setEditTextColor] = useState('');
  const [editTitleColor, setEditTitleColor] = useState('');
  const [editImage, setEditImage] = useState('');

  useEffect(() => {
    if (timeline) {
      setEditTitle(title);
      setEditDescription(description);
      setEditBackgroundColor(bgColor);
      setEditBorderColor(borderColor);
      setEditTextColor(textColor);
      setEditTitleColor(titleColor);
      setEditImage(imageUrl);
    }

  }, [itemId])

  const handleSubmitEdit = () => {
    console.log('submitted edit!')
    console.log(timeline)
    dispatch(updateTimeline({
      id,
      'title': editTitle,
      'description': editDescription,
      'imageUrl': editImage,
      'bgColor': editBackgroundColor,
      'borderColor': editBorderColor,
      'textColor': editTextColor,
      'titleColor': editTitleColor
    }))
    handleCloseEdit();
  }


  return (

    <Modal show={showEdit} onHide={handleCloseEdit} className='' scrollable='true'>
      <Modal.Header closeButton className='bg-info text-light shadow-sm'>
        <Modal.Title>
          <i className='bi-pencil-square pe-2' ></i>
          Edit Timeline
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3 p-2 mb-3 modalInputs' controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className='mb-3 p-2 mb-3 modalInputs'
            controlId='description'
          >
            <Form.Label>Description</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              placeholder='Details or keywords for easier searching'
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3 p-2 mb-3 modalInputs' controlId='image'>
            <Form.Label>Image</Form.Label>
            <Form.Control
              type='text'
              placeholder='Your URL goes here'
              value={editImage}
              onChange={(e) => setEditImage(e.target.value)}
            />
          </Form.Group>
          <div
            className='p-2 mb-3 modalInputs' >
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
                    onChange={(e) => setEditBackgroundColor(e.target.value)}
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
                    onChange={(e) => setEditTextColor(e.target.value)}
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
                    onChange={(e) => setEditTitleColor(e.target.value)}
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
                    onChange={(e) => setEditBorderColor(e.target.value)}
                  />
                </Col>
              </Row>
            </Form.Group>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer className='justify-content-center border-0' >
        <Button variant='light' className='rounded shadow-sm' onClick={handleCloseEdit}>
          Cancel <i className='bi bi-x-lg' ></i>
        </Button>
        <Button variant='info' className='rounded shadow-sm' onClick={handleSubmitEdit}>
          Save Changes <FaFloppyDisk className='align-top mt-1' />
        </Button>
      </Modal.Footer>
    </Modal>




  );
};

export default TimelineEditModal;