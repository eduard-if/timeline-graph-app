import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TimelinePageBottomNavbar from '../components/Navbars&Toolbars/TimelinePageBottomNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Nav } from 'react-bootstrap';
import VisTimelineGraph from '../components/VisTimelineGraph';
import { openTimeline } from '../actions/timelineActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { PuffLoader } from 'react-spinners';

const EventsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector((state) => state.timelineOpen);
  const { loading, error } = data;

  const timelineID = id;

  const [axis, setAxis] = useState('bottom');
  const [itemOrientation, setItemOrientation] = useState('bottom');
  const [verticalScroll, setVerticalScroll] = useState('false');

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(openTimeline(id));
  }, [id]);

  useEffect(() => {
    if (data.timeline.timeline) {
      setAxis(data.timeline.timeline.axis);
      setItemOrientation(data.timeline.timeline.itemOrientation);
      setVerticalScroll(data.timeline.timeline.verticalScroll);
    }
  }, [id]);

  return (
    <>
      {loading ? (
        <PuffLoader
          color='#17141f'
          role='status'
          className='mx-auto mt-5'
          speedMultiplier={2}
          size={200}
        />
      ) : error ? (
        <Container className='pt-5'>
          <Message variant='danger'>
            <h1 align='center'>{error}</h1>
          </Message>
        </Container>
      ) : (
        data.timeline.timeline && (
          <>
            {/* small timeline title + link to homepage */}
            <Nav className='justify-content-start px-1 py-1'>
              <Link
                to={'/'}
                className='text-dark me-1 pe-1'
                style={{ textDecoration: 'none' }}
              >
                <i className='bi bi-bar-chart-steps'></i>
              </Link>
              <Nav.Item>
                <span className='fw-light'> </span>
                {data.timeline.timeline.title}
              </Nav.Item>
            </Nav>

            {/* actual timeline plus related controls */}
            <VisTimelineGraph
              items={data.timeline.items}
              options={{
                orientation: {
                  axis: axis,
                  item: itemOrientation,
                },
                ...(verticalScroll ? {} : { width: '100%', height: '80vh' }),
                showCurrentTime: false,
              }}
              timelineID={timelineID}
            />
          </>
        )
      )}

      {/* home & timeline options sidebar + create event button */}
      <TimelinePageBottomNavbar
        axis={axis}
        setAxis={setAxis}
        itemOrientation={itemOrientation}
        setItemOrientation={setItemOrientation}
        verticalScroll={verticalScroll}
        setVerticalScroll={setVerticalScroll}
      />
    </>
  );
};

export default EventsPage;
