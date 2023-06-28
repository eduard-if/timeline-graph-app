import React, { useEffect } from 'react';
import { Timeline } from 'vis-timeline';
import { DataSet } from 'vis-data';
import { useRef } from 'react';
import { useState } from 'react';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css'
import { Button, ButtonGroup, Card, Collapse, Row, Col } from 'react-bootstrap';
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

    // handling the creation of the timeline
    const container = timelineRef.current;
    const itemsDataset = new DataSet(items)
    const newTimeline = new Timeline(container, itemsDataset, options);
    setTimeline(newTimeline);

    // adding on select callback function
    // moves the clicked item into focus
    // sets the selected item state for the buttons bar on the top
    newTimeline.on('select', (properties) => {
      console.log('properties:', properties)
      const selectedItem = newTimeline.itemsData.get(properties.items[0])

      console.log(selectedItem)
      console.log('selected')
      newTimeline.focus(selectedItem.id, { animation: true, zoom: false });
      setItemToEdit(selectedItem)


    });

    // manually destroying (remove from dom, clear data) the timeline every time the data changes
    // isnt necesarry in vanilla js, does not work properly in this react implementation
    return () => {
      if (newTimeline) {
        newTimeline.destroy();
      }
    };
  }, [options, items]);


  // timeline view control buttons
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


  // buttons bar border style
  const leftBorderStyle = {
    borderTopLeftRadius: '6px',
    borderBottomLeftRadius: '6px',
  }

  const rightBorderStyle = {
    borderTopRightRadius: '6px',
    borderBottomRightRadius: '6px',
  }

  return (
    <>

      {/* the top buttons bar and the card that show up when an event is clicked */}
      <Row className='d-flex justify-content-center mt-1 mx-2 fixed-top' >
        {itemToEdit && itemToEdit.id ? (
          <div  >
            <Col className='d-flex justify-content-center'>
              <ButtonGroup className='shadow-sm' >

                <Button
                  style={leftBorderStyle}
                  className='btn-sm  ' variant='dark'>
                  <i className='bi bi-trash3-fill fs-6' ></i>
                </Button>

                {/* bar button with date details */}
                <Button variant='dark border-0 ' as='div' onClick={() => setOpenEventDetails(!openEventDetails)}>
                  <span className='' >{new Date(itemToEdit.start).toLocaleString('en-GB', { hour12: false })} - {new Date(itemToEdit.end).toLocaleString('en-GB', { hour12: false })}</span>
                  <span className='fw-bold'> {itemToEdit.content}</span>
                </Button>

                <Button
                  style={rightBorderStyle}
                  className='btn-sm  ' variant='dark '>
                  <i className='bi-pencil-square fs-6' ></i>
                </Button>
              </ButtonGroup>
            </Col>
            <div className=' ' >
              <Row>

                {/* quick fix! - empty column to close the details card when clicked outside of it in the upper portion */}
                <Col onClick={() => setOpenEventDetails(false)}  ></Col>

                {/* card is in a div that stretches over the graph and doesnt allow clicking on it to switch event */}
                {/* should change the position to fixed */}
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

                      {/* close details card button */}
                      <Card.Footer className='border-0 p-0 pb-1 eventCardDetailsFooter'>
                        <div className='d-flex justify-content-center'>
                          <Button
                            onClick={() => setOpenEventDetails(false)}
                            className='px-2 py-1 border-0' variant='light'
                            style={{ backgroundColor: 'transparent' }} >
                            <i className='bi bi-x-lg' ></i>
                          </Button>
                        </div>
                      </Card.Footer>
                    </Card>
                  </Collapse>
                </Col>

                {/* quick fix! - empty column to close the details card when clicked outside of it in the upper portion */}
                <Col onClick={() => setOpenEventDetails(false)}  ></Col>
              </Row>

            </div>
          </div>

        ) : (<div></div>)}

      </Row >


      {/* the timeline graph itself */}
      <div>
        <div ref={timelineRef}
          id='timeline'
          style={{ height: '80vh', width: '100%' }}
          className='timelineContainer' ></div>
      </div>

      {/* buttons to control the view of the timeline + open events list & groups */}
      <div>
        <div className='d-flex flex-row justify-content-center fixed-bottom mb-5'>
          <Link to={`events-list`}  >
            <Button
              onClick={handleShowEventsList}
              variant="light"
              className='fs-4 py-0 px-2 border-0'
            >
              <i className='bi bi-card-list' ></i>
            </Button>
          </Link>

          <ButtonGroup className='d-flex mx-1 mb-1'>

            <Button onClick={scrollLeft}
              variant='light'
              className='border-0'
            >
              <i className='bi bi-chevron-left' ></i>
            </Button>
            <Button
              onClick={zoomIn}
              variant='light'
              className='border-0'
            >
              <i className='bi bi-zoom-in' ></i>
            </Button>
            <Button
              onClick={fit}
              variant='light'
              className='border-0'
            >
              Fit
            </Button>
            <Button
              onClick={zoomOut}
              type='button'
              variant='light'
              className='border-0'
            >
              <i className='bi bi-zoom-out' ></i>
            </Button>
            <Button onClick={scrollRight}
              variant='light'
              className='border-0'
            >
              <i className='bi bi-chevron-right' ></i>
            </Button>

          </ButtonGroup>
          <Button
            variant="light"
            className='fs-4 py-0 px-2 border-0'
          >
            <i className='bi bi-diagram-3' ></i>
          </Button>
        </div>
      </div>
    </>
  );
};

export default VisTimelineGraph;