import React, { useEffect, useState } from 'react';
import { Accordion, Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CompactPicker } from 'react-color';
import { FaBrush } from 'react-icons/fa6';


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
          <div className='modalInputs'>
            <div className='fs-5 fw-light text-center my-3 ' > <FaBrush />  Card Color Styling</div>

            <Accordion className='text-center mx-3 mb-3 shadow-sm'  >
              <Accordion.Item eventKey='titleColor'>
                <Accordion.Header >Title</Accordion.Header>
                <Accordion.Body>
                  <CompactPicker color={editTitleColor} onChangeComplete={(e) => { setEditTitleColor(e.hex) }} />
                  <div className='d-flex justify-content-center mt-3' >
                    Customize: <Form.Control className='mx-2' type='color' value={editTitleColor} onChange={(e) => setEditTitleColor(e.target.value)}
                    />
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='bgColor'>
                <Accordion.Header>Background</Accordion.Header>
                <Accordion.Body>
                  <CompactPicker color={editBackgroundColor} onChangeComplete={(e) => { setEditBackgroundColor(e.hex) }} />
                  <div className='d-flex justify-content-center mt-3' >
                    Customize: <Form.Control className='mx-2' type='color' value={editBackgroundColor} onChange={(e) => setEditBackgroundColor(e.target.value)}
                    />
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='textColor' >
                <Accordion.Header>Description Text</Accordion.Header>
                <Accordion.Body>
                  <CompactPicker color={editTextColor} onChangeComplete={(e) => { setEditTextColor(e.hex) }} />
                  <div className='d-flex justify-content-center mt-3' >
                    Customize: <Form.Control className='mx-2' type='color' value={editTextColor} onChange={(e) => setEditTextColor(e.target.value)}
                    />
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='borderColor' >
                <Accordion.Header>Border</Accordion.Header>
                <Accordion.Body>
                  <CompactPicker color={editBorderColor} onChangeComplete={(e) => { setEditBorderColor(e.hex) }} />
                  <div className='d-flex justify-content-center mt-3' >
                    Customize: <Form.Control className='mx-2' type='color' value={editBorderColor} onChange={(e) => setEditBorderColor(e.target.value)}
                    />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
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