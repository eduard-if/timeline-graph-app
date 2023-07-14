import React, { useEffect, useState } from 'react';
import {
  Accordion,
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Stack,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CompactPicker } from 'react-color';
import { createEvent } from '../../actions/timelineActions';
import { BsExclamationCircle, BsFillRecordCircleFill } from 'react-icons/bs';
import { FaBrush } from 'react-icons/fa6';

const EventsCreateModal = ({
  showEventsCreateModal,
  handleCloseEventsCreateModal,
}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [type, setType] = useState('box');
  const [bgColor, setBgColor] = useState('');
  const [textColor, setTextColor] = useState('');
  const [fontSize, setFontsize] = useState('medium');
  const [fontStyle, setFontStyle] = useState('normal');
  const [fontWeight, setFontWeight] = useState('normal');
  const [lineDecoration, setLineDecoration] = useState('none');
  const [borderColor, setBorderColor] = useState('');
  const [notesDetails, setNotesDetails] = useState('');

  const [showDateAlert, setShowDateAlert] = useState(false);
  const [showTopAlert, setShowTopAlert] = useState(false);
  const [topAlertMessage, setTopAlertMessage] = useState('');

  const stylePreview = {
    fontSize: 'small',
    fontStyle: `${fontStyle}`,
    fontWeight: `${fontWeight}`,
    textDecorationLine: `${lineDecoration}`,
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.timelineOpen);
  const { loading, error } = data;

  const handleSubmit = () => {
    const id = data.timeline.timeline.id;
    console.log(id);

    if (content.trim().length === 0) {
      setTopAlertMessage("Title can't be empty!");
      setShowTopAlert(true);
      return;
    }

    if (start === '') {
      setTopAlertMessage('Start date missing!');
      setShowTopAlert(true);
      return;
    }

    if ((type === 'range' || type === 'background') && end === '') {
      setTopAlertMessage('Range and Background types require an End Date!');
      setShowTopAlert(true);
      return;
    }

    dispatch(
      createEvent(
        title,
        fontSize,
        fontStyle,
        fontWeight,
        content,
        start,
        end,
        type,
        bgColor,
        textColor,
        borderColor,
        notesDetails,
        id
      )
    );
    if (!loading) {
      handleCloseEventsCreateModal();
      setContent('');
      setTitle('');
      handleCloseTopAlert();
      setShowDateAlert(false);
    }
  };

  useEffect(() => {
    if (type === 'point') {
      setBorderColor('');
      setBgColor('');
      setEnd('');
    }

    if (type === 'box') {
      setEnd('');
    }
  }, [type]);

  useEffect(() => {
    if (end < start && end !== '') {
      setShowDateAlert(true);
    }
  }, [start, end]);

  const handleCloseTopAlert = () => {
    setTopAlertMessage('');
    setShowTopAlert(false);
  };

  return (
    <Modal
      show={showEventsCreateModal}
      onHide={handleCloseEventsCreateModal}
      className=''
      scrollable='true'
      size='lg'
      animation={false}
    >
      <Modal.Header
        closeVariant='white'
        closeButton
        className=' bg-dark text-light shadow-sm '
      >
        <Modal.Title>
          <i className='bi bi-calendar-event pe-2'></i>
          New Event
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='eventCreateModalBody'>
        <Form className='p-0 m-0'>
          <Row>
            <Col lg='6'>
              <Form.Group
                className='mb-3   p-2 modalInputs'
                controlId='content'
              >
                <Form.Label>Text Content</Form.Label>
                <Form.Control
                  className=''
                  type='text'
                  placeholder='What you see on the Timeline'
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className='mb-3   p-2 modalInputs'>
                <Row>
                  <Col>
                    <Form.Label style={stylePreview}>Font Size</Form.Label>
                    <Form.Select
                      className='rounded'
                      size='sm'
                      aria-label='select-font-style'
                      onChange={(e) => setFontsize(e.target.value)}
                      value={fontSize}
                    >
                      <option value='medium' style={{ fontSize: 'medium' }}>
                        Medium
                      </option>
                      <option value='large' style={{ fontSize: 'large' }}>
                        Large
                      </option>
                      <option value='small' style={{ fontSize: 'small' }}>
                        Small
                      </option>
                      <option value='x-small' style={{ fontSize: 'x-small' }}>
                        xs
                      </option>
                      <option value='xx-small' style={{ fontSize: 'xx-small' }}>
                        xxs
                      </option>
                      <option value='x-large' style={{ fontSize: 'x-large' }}>
                        XL
                      </option>
                      <option value='xx-large' style={{ fontSize: 'xx-large' }}>
                        XXL
                      </option>
                      <option
                        value='xxx-large'
                        style={{ fontSize: 'xxx-large' }}
                      >
                        XXXL
                      </option>
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label style={stylePreview}>Style</Form.Label>
                    <Form.Select
                      className='rounded'
                      size='sm'
                      aria-label='select-font-style'
                      onChange={(e) => setFontStyle(e.target.value)}
                      value={fontStyle}
                    >
                      <option value='normal' style={{ fontStyle: 'normal' }}>
                        Normal
                      </option>
                      <option value='italic' style={{ fontStyle: 'italic' }}>
                        Italic
                      </option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label style={stylePreview}>Weight</Form.Label>
                    <Form.Select
                      className='rounded'
                      size='sm'
                      aria-label='select-font-weight'
                      onChange={(e) => setFontWeight(e.target.value)}
                      value={fontWeight}
                    >
                      <option value='normal' style={{ fontWeight: 'normal' }}>
                        Normal
                      </option>
                      <option value='bold' style={{ fontWeight: 'bold' }}>
                        Bold
                      </option>
                      <option value='lighter' style={{ fontWeight: 'lighter' }}>
                        Lighter
                      </option>
                    </Form.Select>
                  </Col>
                  <Col></Col>
                </Row>
              </Form.Group>

              <Form.Group className='mb-3   p-2 modalInputs' controlId='type'>
                <Form.Label>Type</Form.Label>
                <Form.Select
                  className='rounded'
                  size='sm'
                  aria-label='select-event-type'
                  onChange={(e) => setType(e.target.value)}
                  value={type}
                >
                  <option value='box'>Box</option>
                  <option value='point'>Point</option>
                  <option value='range'>Range</option>
                  <option value='background'>Background</option>
                </Form.Select>
                {type === 'background' && (
                  <div className='ps-1'>
                    <span
                      className='text-danger fw-light'
                      style={{ fontSize: 'smaller' }}
                    >
                      <i className='bi bi-exclamation-circle'></i> Please note
                      that background events are <u>not selectable</u> on the
                      timeline. Go to the{' '}
                      <u>
                        <strong>
                          Events list <i className='bi bi-card-list'></i>
                        </strong>
                      </u>{' '}
                      to edit.
                    </span>
                  </div>
                )}
              </Form.Group>
              <div className='  p-2 mb-3 modalInputs'>
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
                    disabled={type === 'box' || (type === 'point' && true)}
                  />
                </Form.Group>
                <Alert
                  dismissible={true}
                  show={showDateAlert}
                  onClose={() => setShowDateAlert(false)}
                  className='rounded mt-2'
                >
                  <BsExclamationCircle className='mb-1' /> End date cannot be
                  set <strong>before</strong> start date!
                </Alert>
              </div>
              <Form.Group className='mb-3   p-2 modalInputs' controlId='hover'>
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
              <div className='modalInputs mb-3'>
                <div className='fs-6 fw-light text-center my-3 '>
                  {' '}
                  <FaBrush className='mb-1' /> Event Color Styling
                </div>

                <Accordion className='text-center mx-3 mb-3 shadow-sm'>
                  <Accordion.Item eventKey='textColor'>
                    <Accordion.Header>
                      {' '}
                      <BsFillRecordCircleFill
                        style={{ color: textColor }}
                        className='me-1'
                      />{' '}
                      Text
                    </Accordion.Header>
                    <Accordion.Body>
                      <CompactPicker
                        color={textColor}
                        onChangeComplete={(e) => {
                          setTextColor(e.hex);
                        }}
                      />
                      <div className='d-flex justify-content-center mt-3'>
                        Customize:{' '}
                        <Form.Control
                          className='mx-2'
                          type='color'
                          value={textColor}
                          onChange={(e) => setTextColor(e.target.value)}
                        />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  {type !== 'point' && (
                    <>
                      <Accordion.Item eventKey='bgColor'>
                        <Accordion.Header>
                          {' '}
                          <BsFillRecordCircleFill
                            style={{ color: bgColor }}
                            className='me-1'
                          />{' '}
                          Background
                        </Accordion.Header>
                        <Accordion.Body>
                          <CompactPicker
                            color={bgColor}
                            onChangeComplete={(e) => {
                              setBgColor(e.hex);
                            }}
                          />
                          <div className='d-flex justify-content-center mt-3'>
                            Customize:{' '}
                            <Form.Control
                              className='mx-2'
                              type='color'
                              value={bgColor}
                              onChange={(e) => setBgColor(e.target.value)}
                            />
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey='borderColor'>
                        <Accordion.Header>
                          {' '}
                          <BsFillRecordCircleFill
                            style={{ color: borderColor }}
                            className='me-1'
                          />{' '}
                          Border
                        </Accordion.Header>
                        <Accordion.Body>
                          <CompactPicker
                            color={borderColor}
                            onChangeComplete={(e) => {
                              setBorderColor(e.hex);
                            }}
                          />
                          <div className='d-flex justify-content-center mt-3'>
                            Customize:{' '}
                            <Form.Control
                              className='mx-2'
                              type='color'
                              value={borderColor}
                              onChange={(e) => setBorderColor(e.target.value)}
                            />
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </>
                  )}
                </Accordion>
              </div>
            </Col>
          </Row>
          <Card className='rounded'>
            <Card.Body>
              <Form.Group className='mb-3' controlId='notesDetails'>
                <Form.Label>Notes</Form.Label>
                <Form.Control
                  as='textarea'
                  rows={7}
                  placeholder='Type something...'
                  value={notesDetails}
                  onChange={(e) => setNotesDetails(e.target.value)}
                />
                <span
                  style={{
                    fontSize: 'smaller',
                    fontWeight: 'lighter',
                    opacity: '50%',
                  }}
                  className='ms-1'
                >
                  {' '}
                  {notesDetails.length}
                </span>
              </Form.Group>
            </Card.Body>
          </Card>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Stack gap={2}>
          <div className='d-flex flex-row justify-content-center'>
            <Alert
              className='rounded w-100 shadow-sm'
              dismissible={true}
              variant='primary'
              show={showTopAlert}
              onClose={handleCloseTopAlert}
            >
              <Alert.Heading>
                {' '}
                <BsExclamationCircle className='fs-3 mb-1 me-1' /> Invalid
                input!
              </Alert.Heading>
              <hr></hr>
              <div className=' fs-3 text-center fw-bold'>{topAlertMessage}</div>
            </Alert>
          </div>

          <div className='d-flex justify-content-center'>
            <Button
              variant='light'
              className='rounded shadow-sm me-1'
              onClick={handleCloseEventsCreateModal}
            >
              Cancel <i className='bi bi-x-lg'></i>
            </Button>
            <Button
              variant='success'
              className='rounded shadow-sm ms-1'
              onClick={handleSubmit}
            >
              Create <i className='ps-1  bi bi-plus-lg'></i>
            </Button>
          </div>
        </Stack>
      </Modal.Footer>
    </Modal>
  );
};

export default EventsCreateModal;
