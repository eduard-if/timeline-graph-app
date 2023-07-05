import React, { useEffect } from 'react';
import { Timeline } from 'vis-timeline';
import { DataSet } from 'vis-data';
import { useRef } from 'react';
import { useState } from 'react';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css'
import { Button, ButtonGroup, Card, Collapse, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EventDetailsButtonBar from './Navbars&Toolbars/EventDetailsButtonBar';



const VisTimelineGraph = ({ items, options }) => {
  const timelineRef = useRef('null')
  const [timeline, setTimeline] = useState('');
  const [itemToEdit, setItemToEdit] = useState([]);

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
      <EventDetailsButtonBar itemToEdit={itemToEdit} />


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