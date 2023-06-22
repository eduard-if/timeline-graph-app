import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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

  const timelineID = id;

  const timelineOptions = {
    orientation: { axis: 'bottom', item: 'bottom' },
    width: '100%',
    height: '80vh',
    showCurrentTime: false,
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

              <Nav className='justify-content-start px-1 py-1'>
                <Link to={'/'} className='text-dark me-1' style={{ textDecoration: 'none' }} >
                  <i className='bi bi-bar-chart-steps'></i>
                </Link>
                <Nav.Item>
                  <span className='fw-light' > </span>{data.timeline.timeline.title}
                </Nav.Item>
              </Nav>
              <VisTimelineGraph
                items={data.timeline.items}
                options={timelineOptions}
                timelineID={timelineID}
              />
            </>
          )
      }



      <EventsBottomNavbar />
    </div>
  );
};

export default EventsPage;

