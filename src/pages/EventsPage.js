import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EventsBottomNavbar from '../components/EventsBottomNavbar';
import { useDispatch, useSelector } from 'react-redux';
import EventsTopNavbar from '../components/EventsTopNavbar';
import { Button, ButtonGroup, Container, Nav, NavLink } from 'react-bootstrap';
import VisTimelineGraph from '../components/VisTimelineGraph';
import { DataSet } from 'vis-data';
import { openTimeline } from '../actions/timelineActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const EventsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector(state => state.timelineOpen);
  const { loading, error } = data

  const timelineOptions = {
    orientation: 'both',
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(openTimeline(id));

  }, [id]);

  return (
    <div className='eventPage'>
      {loading ? <Loader /> :
        error ? <Container className='pt-5'>
          <Message variant='danger'><h1 align='center'>{error}</h1></Message>
        </Container>
          : data.timeline.timeline && (
            <>
              <Nav className='justify-content-between px-1 py-1'>
                <Nav.Item>
                  {data.timeline.timeline.title}
                </Nav.Item>
              </Nav>
              <VisTimelineGraph
                items={data.timeline.items}
                options={timelineOptions}
              />
            </>
          )
      }

      <EventsBottomNavbar />
    </div>
  );
};

export default EventsPage;

