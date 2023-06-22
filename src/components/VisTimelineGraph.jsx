import React, { useCallback, useEffect } from 'react';
import { Timeline } from 'vis-timeline';
import { DataSet } from 'vis-data';
import { useRef } from 'react';
import { useState } from 'react';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css'
import { Button, ButtonGroup, Card, Collapse, Row, Col, ListGroup, Container, Form, Modal, FormGroup, FormSelect } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const VisTimelineGraph = ({ items, options, timelineID }) => {
  const timelineRef = useRef('null')
  const [timeline, setTimeline] = useState('');
  const [itemToEdit, setItemToEdit] = useState([]);
  const [openEventDetails, setOpenEventDetails] = useState(false);

  const [showEventsList, setShowEventsList] = useState(false);

  const handleShowEventsList = () => {
    setShowEventsList(!showEventsList);



  }

  useEffect(() => {
    const container = timelineRef.current;
    const itemsDataset = new DataSet(items)
    const newTimeline = new Timeline(container, itemsDataset, options);
    setTimeline(newTimeline);

    newTimeline.on('select', (properties) => {
      console.log('properties:', properties)
      const selectedItem = newTimeline.itemsData.get(properties.items[0])

      console.log(selectedItem)
      console.log('selected')
      newTimeline.focus(selectedItem.id, { animation: true, zoom: false });
      setItemToEdit(selectedItem)


    });


    return () => {
      if (newTimeline) {
        newTimeline.destroy();
      }
    };
  }, [options, items]);


  // const handleItemClick = useCallback(
  //     (itemId) => {
  //         if (timeline) {
  //             timeline.focus(itemId, { animation: true });

  //         }
  //     },
  //     [timeline]
  // );

  const zoomIn = () => {
    if (timeline) {
      timeline.zoomIn(1, { animation: true });
    }
  };

  const zoomOut = () => {
    if (timeline) {
      timeline.zoomOut(1, { animation: true });
    }
  };

  const fit = () => {
    if (timeline) {
      timeline.fit({ animation: true });
    }
  };

  const scrollLeft = () => {
    const window = timeline.getWindow();
    const newStart = window.start - 1000;
    timeline.moveTo(newStart, { animation: true });
  };

  const scrollRight = () => {
    const window = timeline.getWindow();
    const newStart = window.end - 1000;
    timeline.moveTo(newStart, { animation: true });
  };

  return (
    <>
      <Row className='d-flex justify-content-center mt-1 mx-2 fixed-top' >
        {itemToEdit && itemToEdit.id ? (
          <div  >
            <Col className='d-flex justify-content-center'>
              <ButtonGroup className='shadow-sm' >
                <Button className='btn-sm  ' variant='dark'>
                  <i className='bi bi-trash3-fill fs-6' ></i>
                </Button>
                <Button variant='dark border-0 ' as='div' onClick={() => setOpenEventDetails(!openEventDetails)}>
                  <span className='' >{new Date(itemToEdit.start).toLocaleString('en-GB', { hour12: false })} - {new Date(itemToEdit.end).toLocaleString('en-GB', { hour12: false })}</span>
                  <span className='fw-bold'> {itemToEdit.content}</span>
                </Button>
                <Button className='btn-sm  ' variant='dark '>
                  <i className='bi-pencil-square fs-6' ></i>
                </Button>
              </ButtonGroup>
            </Col>
            <div className=' ' >
              <Row>
                <Col onClick={() => setOpenEventDetails(false)}  ></Col>
                <Col className='mt-2' lg={4} md={6} sm={8} xs={12} >
                  <Collapse in={openEventDetails}  >
                    <Card className='eventDetailsCard'  >
                      <Card.Body>
                        <Card.Title  >
                          {itemToEdit.content}
                        </Card.Title>
                        <Card.Text >

                          <span>
                            {itemToEdit.notesDetails}
                          </span>
                          <br></br>
                          <i><span style={{ fontSize: 'small', fontWeight: 'lighter', opacity: '50%' }} id='startEndDates'>
                            <span>From: {new Date(itemToEdit.start).toLocaleString('en-GB', { hour12: false }).split(',')[0]}</span>
                            <br></br>
                            <span>To: {new Date(itemToEdit.end).toLocaleString('en-GB', { hour12: false }).split(',')[0]}</span>
                          </span></i>
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className='border-0 p-0 pb-1 eventCardDetailsFooter'>
                        <div className='d-flex justify-content-center'>
                          <Button onClick={() => setOpenEventDetails(false)} className='px-2 py-1 border-0' variant='light' style={{ backgroundColor: 'transparent' }} >
                            <i className='bi bi-x-lg' ></i>
                          </Button>
                        </div>

                      </Card.Footer>
                    </Card>
                  </Collapse>
                </Col>
                <Col onClick={() => setOpenEventDetails(false)}  ></Col>
              </Row>

            </div>
          </div>

        ) : (<div></div>)}

      </Row >

      <div>
        <div ref={timelineRef}
          id='timeline'
          style={{ height: '80vh', width: '100%' }}
          className='timelineContainer' ></div>
      </div>

      <div>
        <div className='d-flex flex-row justify-content-center fixed-bottom mb-5'>
          <Link to={`events-list`}  >
            <Button
              onClick={handleShowEventsList}
              variant="outline-secondary"
              className='fs-4 py-0 px-2 rounded border-0'
            >
              <i className='bi bi-card-list' ></i>
            </Button>
          </Link>

          <ButtonGroup className='d-flex mx-1 mb-1'>

            <Button onClick={scrollLeft}
              variant='outline-secondary'
              className='border-0'
            >
              <i className='bi bi-chevron-left' ></i>
            </Button>
            <Button
              onClick={zoomIn}
              variant='outline-secondary'
              className='border-0'
            >
              <i className='bi bi-zoom-in' ></i>
            </Button>
            <Button
              onClick={fit}
              variant='outline-secondary'
              className='border-0'
            >
              Fit
            </Button>
            <Button
              onClick={zoomOut}
              type='button'
              variant='outline-secondary'
              className='border-0'
            >
              <i className='bi bi-zoom-out' ></i>
            </Button>
            <Button onClick={scrollRight}
              variant='outline-secondary'
              className='border-0'
            >
              <i className='bi bi-chevron-right' ></i>
            </Button>

          </ButtonGroup>
          <Button
            variant="outline-secondary"
            className='fs-4 py-0 px-2 rounded border-0'
          >
            <i className='bi bi-diagram-3' ></i>
          </Button>
        </div>
      </div>
    </>
  );
};

export default VisTimelineGraph;