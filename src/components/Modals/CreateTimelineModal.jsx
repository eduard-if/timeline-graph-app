import React, { useEffect, useRef, useState } from 'react';
import { Accordion, Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import { createTimeline } from '../../actions/timelineActions';
import { CompactPicker } from 'react-color';
import { FaBrush } from 'react-icons/fa6';

const CreateTimelineModal = ({ showCreateTimelineModal, handleCloseCreateTimelineModal, setShowToast }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [bgColor, setBgColor] = useState('');
  const [borderColor, setBorderColor] = useState('');
  const [textColor, setTextColor] = useState('');
  const [titleColor, setTitleColor] = useState('');

  const isInitialMount = useRef(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const timelineList = useSelector(state => state.timelineList);
  const { error, loading, timelines } = timelineList;

  const timelineCreate = useSelector(state => state.timelineCreate);


  const handleSubmit = () => {
    let timelineData = { title, description, imageUrl, bgColor, borderColor, textColor, titleColor }
    dispatch(createTimeline(timelineData));
  }

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else if (!timelineCreate.loading) {
      handleCloseCreateTimelineModal();
      setShowToast(true);
    }
  }, [timelineCreate.loading]);

  return (
    <Modal
      show={showCreateTimelineModal}
      onHide={handleCloseCreateTimelineModal}
      className=''
      scrollable='true'>

      <Modal.Header closeButton className='bg-dark text-light border-0 shadow-sm'>
        <Modal.Title>
          <i className='bi bi-calendar-range-fill pe-2' ></i>
          New Timeline
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Form>
          <Form.Group className='mb-3 p-2 modalInputs' controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              placeholder='Your title here'
              value={title}
              onChange={(e) => setTitle(e.target.value)}

              required
            />
          </Form.Group>
          <Form.Group
            className='mb-3 p-2 modalInputs'
            controlId='description'
          >
            <Form.Label>Description</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              placeholder='Type something...'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3 p-2 modalInputs' controlId='imageUrl'>
            <Form.Label>Image</Form.Label>
            <Form.Control
              type='text'
              placeholder='Your URL goes here'
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </Form.Group>

          <div className='modalInputs'>
            <div className='fs-5 fw-light text-center my-3 ' > <FaBrush />  Card Color Styling</div>

            <Accordion className='text-center mx-3 mb-3 shadow-sm'  >
              <Accordion.Item eventKey='titleColor'>
                <Accordion.Header >Title</Accordion.Header>
                <Accordion.Body>
                  <CompactPicker color={titleColor} onChangeComplete={(e) => { setTitleColor(e.hex) }} />
                  <div className='d-flex justify-content-center mt-3' >
                    Customize: <Form.Control className='mx-2' type='color' value={titleColor} onChange={(e) => setTitleColor(e.target.value)}
                    />
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='bgColor'>
                <Accordion.Header>Background</Accordion.Header>
                <Accordion.Body>
                  <CompactPicker color={bgColor} onChangeComplete={(e) => { setBgColor(e.hex) }} />
                  <div className='d-flex justify-content-center mt-3' >
                    Customize: <Form.Control className='mx-2' type='color' value={bgColor} onChange={(e) => setBgColor(e.target.value)}
                    />
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='textColor' >
                <Accordion.Header>Description Text</Accordion.Header>
                <Accordion.Body>
                  <CompactPicker color={textColor} onChangeComplete={(e) => { setTextColor(e.hex) }} />
                  <div className='d-flex justify-content-center mt-3' >
                    Customize: <Form.Control className='mx-2' type='color' value={textColor} onChange={(e) => setTextColor(e.target.value)}
                    />
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='borderColor' >
                <Accordion.Header>Border</Accordion.Header>
                <Accordion.Body>
                  <CompactPicker color={borderColor} onChangeComplete={(e) => { setBorderColor(e.hex) }} />
                  <div className='d-flex justify-content-center mt-3' >
                    Customize: <Form.Control className='mx-2' type='color' value={borderColor} onChange={(e) => setBorderColor(e.target.value)}
                    />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

        </Form>

      </Modal.Body>

      <Modal.Footer className='justify-content-center border-0' >
        {timelineCreate.loading ? <PuffLoader color='#17141f' role='status' className='mx-auto my-3' speedMultiplier={2} />
          : (<>
            <Button variant='light' className='rounded shadow-sm' onClick={handleCloseCreateTimelineModal}>
              Cancel <i className='bi bi-x-lg' ></i>
            </Button>
            <Button variant='primary' className='rounded shadow-sm' onClick={handleSubmit} >
              Create <i className='ps-1  bi bi-plus-lg '></i>
            </Button>
          </>)
        }

      </Modal.Footer>
    </Modal>
  );
};

export default CreateTimelineModal;