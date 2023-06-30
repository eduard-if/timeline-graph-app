
import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CirclePicker, CompactPicker, GithubPicker, SketchPicker, SliderPicker } from 'react-color';
import { createEvent } from '../../actions/timelineActions';

const EventsCreateModal = ({ showEventsCreateModal, handleCloseEventsCreateModal }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [start, setStart] = useState('2023-06-19');
  const [end, setEnd] = useState('2023-06-20');
  const [type, setType] = useState('box');
  const [bgColor, setBgColor] = useState('');
  const [textColor, setTextColor] = useState('');
  const [fontSize, setFontsize] = useState('medium');
  const [fontStyle, setFontStyle] = useState('normal');
  const [fontWeight, setFontWeight] = useState('normal');
  const [lineDecoration, setLineDecoration] = useState('none');
  const [borderColor, setBorderColor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [notesDetails, setNotesDetails] = useState('');

  const stylePreview = { fontSize: 'small', fontStyle: `${fontStyle}`, fontWeight: `${fontWeight}`, textDecorationLine: `${lineDecoration}` };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector(state => state.timelineOpen);
  const { loading, error } = data

  const handleSubmit = () => {
    const id = data.timeline.timeline.id
    console.log(id)

    dispatch(createEvent(title, content, start, end, type, bgColor, textColor, borderColor, notesDetails, id))
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
      <Modal.Header closeVariant='white' closeButton className='eventsCreateModalHeader bg-dark text-light shadow-sm '>
        <Modal.Title>
          <i className='bi bi-calendar-event pe-2' ></i>
          New Event
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='eventCreateModalBody'   >
        <Form className='p-0 m-0' >
          <Row>

            <Col lg='6'>
              <Form.Group
                className='mb-3   p-2 modalInputs'
                controlId='content'>
                <Form.Label>Text Content</Form.Label>
                <Form.Control
                  // style={{ boxShadow: '0 2px 10px #3030301e' }}
                  className=''
                  type='text'
                  placeholder='What you see on the Timeline'
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group
                className='mb-3   p-2 modalInputs' >
                <Row>
                  <Col>
                    <Form.Label style={stylePreview} >Font Size</Form.Label>
                    <Form.Select
                      className='rounded'
                      size='sm' aria-label='select-font-style' onChange={(e) => setFontsize(e.target.value)} value={fontSize}>
                      <option value='medium' style={{ fontSize: 'medium' }} >Medium</option>
                      <option value='large' style={{ fontSize: 'large' }} >Large</option>
                      <option value='small' style={{ fontSize: 'small' }} >Small</option>
                      <option value='x-small' style={{ fontSize: 'x-small' }} >xs</option>
                      <option value='xx-small' style={{ fontSize: 'xx-small' }} >xxs</option>
                      <option value='x-large' style={{ fontSize: 'x-large' }} >XL</option>
                      <option value='xx-large' style={{ fontSize: 'xx-large' }} >XXL</option>
                      <option value='xxx-large' style={{ fontSize: 'xxx-large' }} >XXXL</option>
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label
                      style={stylePreview}>Style</Form.Label>
                    <Form.Select
                      className='rounded'
                      size='sm' aria-label='select-font-style' onChange={(e) => setFontStyle(e.target.value)} value={fontStyle}>
                      <option value='normal' style={{ fontStyle: 'normal' }} >Normal</option>
                      <option value='italic' style={{ fontStyle: 'italic' }} >Italic</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label
                      style={stylePreview}>Weight</Form.Label>
                    <Form.Select
                      className='rounded'
                      size='sm' aria-label='select-font-weight' onChange={(e) => setFontWeight(e.target.value)} value={fontWeight}>
                      <option value='normal' style={{ fontWeight: 'normal' }} >Normal</option>
                      <option value='bold' style={{ fontWeight: 'bold' }} >Bold</option>
                      <option value='lighter' style={{ fontWeight: 'lighter' }} >Lighter</option>
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label
                      style={stylePreview}>Line Decoration</Form.Label>
                    <Form.Select
                      className='rounded'
                      size='sm' aria-label='select-font-line' onChange={(e) => setLineDecoration(e.target.value)} value={lineDecoration}>
                      <option value='none' style={{ textDecorationLine: 'none' }} >None</option>
                      <option value='underline' style={{ textDecorationLine: 'underline' }} >Underline</option>
                      <option value='overline' style={{ textDecorationLine: 'overline' }} >Overline</option>
                      <option value='line-through' style={{ textDecorationLine: 'line-through' }} >Line-through</option>

                    </Form.Select>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group
                className='mb-3   p-2 modalInputs'
                controlId='type'>
                <Form.Label>Type</Form.Label>
                <Form.Select
                  className='rounded'
                  size='sm' aria-label='select-event-type' onChange={(e) => setType(e.target.value)} value={type}>
                  <option value='box'>Box</option>
                  <option value='point'>Point</option>
                  <option value='range'>Range</option>
                  <option value='background'>Background</option>
                </Form.Select>
                {type === 'background' && (
                  <div className='ps-1'>
                    <span className='text-danger fw-light' style={{ fontSize: 'smaller' }} >
                      <i className='bi bi-exclamation-circle' ></i> Please note that background events are <u>not selectable</u> on the timeline.
                      Go to the <u><strong>Events list <i className='bi bi-card-list' ></i></strong></u> to edit.
                    </span>
                  </div>

                )}

              </Form.Group>
              <div
                className='  p-2 mb-3 modalInputs'>
                <Form.Group className='mb-3' controlId='start'>
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control

                    size='sm'
                    type='date'
                    placeholder='Your title here'
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className='' controlId='end'>
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    size='sm'
                    type='date'
                    placeholder='Your title here'
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                    disabled={type === 'box' || type === 'point' && true}
                  />
                </Form.Group>
              </div>
              <Form.Group
                className='mb-3   p-2 modalInputs'
                controlId='hover'>
                <Form.Label>Hover Text</Form.Label>
                <Form.Control
                  size='sm'
                  type='text'
                  placeholder='Shows when you hover over an item'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

            </Col>

            <Col>
              <div
                className='  p-2 mb-3 modalInputs' >
                {type !== 'point' &&
                  (
                    <Form.Group
                      className='mb-3'
                      controlId='bgColor'
                    >
                      <Form.Label className='mt-2'>Background color</Form.Label>
                      {/* <CirclePicker /> */}
                      <Row className='justify-content-start'>
                        <Col xs={4}>

                        </Col>
                        <Col xs={1}>
                          <Form.Control
                            type='color'
                            value={bgColor}
                            onChange={(e) => setBgColor(e.target.value)}
                          />
                        </Col>
                        <Col>

                        </Col>
                      </Row>
                    </Form.Group>
                  )
                }

                <Form.Group
                  className='mb-3'
                  controlId='textColor'
                >
                  <Form.Label className='mt-2'>Text color</Form.Label>
                  {/* <SliderPicker /> */}
                  <Row className='justify-content-start'>
                    <Col xs={4}>


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

                {type !== 'point' &&
                  (
                    <Form.Group
                      className='mb-3'
                      controlId='borderColor'
                    >
                      <Form.Label className='mt-2'>Border color</Form.Label>
                      {/* <SketchPicker /> */}
                      <Row className='justify-content-start'>
                        <Col xs={4}>


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
                  )}

              </div>
            </Col>

          </Row>
        </Form>
        <Card>
          <Card.Header>
            Details
          </Card.Header>
          <Card.Body>
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
              className="mb-3"
              controlId='notesDetails'
            >
              <Form.Label>Notes</Form.Label>
              <Form.Control
                as='textarea'
                rows={7}
                placeholder='Type something...'
                value={notesDetails}
                onChange={(e) => setNotesDetails(e.target.value)}
              />
              <span style={{ fontSize: 'smaller', fontWeight: 'lighter', opacity: '50%' }} className='ms-1'> {notesDetails.length}</span>
            </Form.Group>
          </Card.Body>

        </Card>
      </Modal.Body>
      <Modal.Footer className='justify-content-center'>
        <Button variant='danger' className='rounded' type='submit' onClick={handleCloseEventsCreateModal}>
          Cancel
        </Button>
        <Button variant='success' className='rounded' onClick={handleSubmit} >
          Create <i className='ps-1  bi bi-plus-lg'></i>
        </Button>

      </Modal.Footer>
    </Modal>
  );
};

export default EventsCreateModal;