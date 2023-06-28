import React, { useEffect } from 'react'
import { Nav, NavItem, Container, Row, Col, Form, ListGroup, Card, Button, ButtonGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { openTimeline } from '../actions/timelineActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useMediaQuery } from 'react-responsive';

const EventsListPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector(state => state.timelineOpen);
  const { loading, error } = data
  // const items = data.timeline.items

  const bootstrapMediumBreakpoint = useMediaQuery({ maxWidth: 768 })

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(openTimeline(id));

  }, [id]);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  }

  const colMargin = {
    margin: !bootstrapMediumBreakpoint ? '2px' : ''
  }

  return (
    <div>

      <>
        {/* navbar split into 2 pieces for navigation(top) and filtering(bottom) */}
        <Nav
          style={{ backdropFilter: 'blur(2px) grayscale(100%)' }}
          className='sticky-top justify-content-center shadow-sm'>

          <div className='d-flex text-dark fs-3 px-3 pt-2 pb-1 fw-bold justify-content-between w-100' >

            <Link to={`/timeline/${id}`} style={{ textDecoration: 'none' }} className='text-dark fs-4 fw-light' >
              <NavItem  >
                <i className='bi bi-card-list' ></i> Events List
              </NavItem>
            </Link>
            <NavItem  >
              <Link to={`/timeline/${id}`}
                style={{ textDecoration: 'none' }}
              >
                <Button
                  className=' border-0 fw-light rounded py-1 mt-1 fs-6 d-flex flex-row'
                  variant='light'
                >
                  <i className="bi bi-arrow-bar-left"></i>
                  <div
                    style={{ display: !bootstrapMediumBreakpoint ? 'block' : 'none' }}
                  >Back to Timeline</div>
                </Button>
              </Link>
            </NavItem>
          </div>

          {/* events filtering */}
          <div
            className='d-flex justify-content-center  px-3 py-2 bg-transparent w-100'>
            <NavItem>
              <Form className='d-flex ' >
                <Form.Control
                  type='search'
                  placeholder='Search'
                  className='bg-light text-dark border-dark border-opacity-25 opacity-50 rounded  shadow-sm '
                  aria-label='Search'
                  size='sm'
                />
                <Form.Select
                  size='sm'
                  style={{ maxWidth: 'fit-content' }}
                  className='mx-2 bg-dark text-light opacity-50 rounded  shadow-sm  '
                  aria-label='select-event-type' >
                  <option style={{ fontStyle: 'italic' }} >Type</option>
                  <option value='box'>Box</option>
                  <option value='point'>Point</option>
                  <option value='range'>Range</option>
                  <option value='background'>Background</option>
                </Form.Select>
                <Form.Select
                  size='sm'
                  style={{ maxWidth: 'fit-content' }}
                  className='mx-2 bg-dark text-light opacity-50 rounded shadow-sm  '
                  aria-label='select-sort' >
                  <option style={{ fontStyle: 'italic' }} >Sort</option>
                  <option value='box'>Start Date Ascending</option>
                  <option value='point'>Start Date Descending</option>
                </Form.Select>
              </Form>
            </NavItem>
          </div>
        </Nav>

        {/* container that renders the events list + details */}
        <Container className='mt-4' >
          {loading ? <Loader /> :
            data.timeline && data.timeline.items && data.timeline.items.length === 0 ? <Message variant='secondary' >
              <h1 className='text-center fw-light' >Timeline Empty...</h1>
            </Message> :
              error ? <Container className='pt-5'>
                <Message variant='danger' ><h1 align='center'>{error}</h1></Message>
              </Container>
                : data.timeline.timeline && (
                  <ListGroup variant='' className='eventsListContainer my-4 '
                  >
                    <span className='fw-lighter ms-3 opacity-50' style={{ fontSize: 'smaller' }} >Total items: {data.timeline.items.length}</span>
                    {data.timeline.items.map((item, index) => (
                      <ListGroup.Item key={index} className='py-3 bg-transparent'>
                        <Card className='eventsListCard' >
                          <Card.Body>
                            <Row >
                              <Col md className='text-center my-2 ' >
                                <ButtonGroup aria-label='edit' className='' size=''>
                                  <Button
                                    // onClick={handleShowDelete}
                                    variant='outline-dark'
                                    className='rounded border-0 mx-1'

                                  >
                                    <i className='bi bi-trash3-fill' ></i>
                                  </Button>
                                  <Button
                                    variant='outline-dark'
                                    className='rounded border-0 mx-1'
                                  >
                                    <i className='bi-pencil-square' ></i>
                                  </Button>
                                </ButtonGroup>
                              </Col>
                              <Col md className='d-flex  justify-content-center my-2' >
                                <strong>{item.content}</strong>
                              </Col>
                              <Col md className='text-center  my-2 fw-light eventsListCardCol shadow-sm' style={colMargin} >
                                Type
                                <br></br>
                                <hr className='my-1' ></hr>
                                {item.type}
                              </Col>
                              <Col md className='text-center  my-2  eventsListCardCol shadow-sm' style={colMargin} >
                                Start Date
                                <br></br>
                                <hr className='my-2 ' ></hr>
                                {new Date(item.start).toLocaleString('en-GB', { hour12: false })}
                              </Col>
                              <Col md className='text-center  my-2 eventsListCardCol shadow-sm' style={colMargin} >
                                End Date
                                <br></br>
                                <hr className='my-2' ></hr>
                                {new Date(item.end).toLocaleString('en-GB', { hour12: false })}
                              </Col>
                              <Col md className='text-center  my-2 eventsListCardCol shadow-sm' style={colMargin} >
                                Group
                                <br></br>
                                <hr className='my-1' ></hr>
                                Subgroup
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )
          }
        </Container>

        {/* fixed floating navigation buttons */}
        <Link to={`/timeline/${id}`} >
          <Button
            variant='secondary'
            className='rounded-circle px-2 py-1  ms-4  fs-6 opacity-75 shadow-sm'
            style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              marginBottom: '6rem',
              scale: '1.2',
              backdropFilter: 'blur(15px)'
            }}
          >
            <i className='bi bi-arrow-90deg-left' ></i>
          </Button>
        </Link>

        <Link to={'/'} >
          <Button
            variant='dark'
            className='rounded-circle px-2 py-1  ms-4  fs-6 opacity-75 shadow-sm'
            style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              marginBottom: '2rem',
              scale: '1.2'
            }}
          >
            <i className='bi bi-house' ></i>
          </Button>
        </Link>

        <Button
          variant='secondary'
          className='rounded-circle px-2 py-1 me-4 fs-6 shadow-sm'
          onClick={handleScrollToTop}
          style={{
            position: 'fixed',
            bottom: 0,
            right: 0,
            marginBottom: '2rem',
            scale: '1.2'
          }}
        >
          <i className='bi bi-chevron-up' ></i>
        </Button>
      </>

    </div>
  )
}

export default EventsListPage