import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EventsBottomNavbar from '../components/EventsBottomNavbar';
import { useDispatch, useSelector } from 'react-redux';
import EventsTopNavbar from '../components/EventsTopNavbar';
import { Button, Nav, NavLink } from 'react-bootstrap';
import VisTimelineGraph from '../components/VisTimelineGraph';
import { DataSet } from 'vis-data';
import { openTimeline } from '../actions/timelineActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
const EventsPage = () => {
  const dispatch = useDispatch();
  // dispatch get events 
  // dispatch create, update, delete events

  const { id } = useParams();

  const data = useSelector(state => state.timelineOpen);
  const { loading, error } = data
  const { timeline, items } = data.timeline
  console.log('data: ', data)
  console.log('timeline: ', timeline)
  console.log('items: ', items)


  const timelineOptions = {
    orientation: 'both',
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(openTimeline(id));
  }, [id]);

  return (
    <div className='eventPage'>


      {loading ? <Loader /> : error ? <Message>{error}</Message>
        : timeline && (
          <>
            <Nav className='justify-content-between px-1 py-1'>
              <Nav.Item>
                <h2 >{timeline.title}</h2>
              </Nav.Item>
            </Nav>
            <VisTimelineGraph items={items} options={timelineOptions} />
          </>


        )
      }


      <EventsBottomNavbar />

    </div>
  );
};

export default EventsPage;

  // const timelineItems = new DataSet([
  //   { id: 1, content: 'Treaty of Versailles', start: '1919-06-28', type: 'box' },
  //   { id: 2, content: 'Rise of Adolf Hitler', start: '1933-01-30', type: 'point' },
  //   { id: 3, content: 'German Invasion of Poland', start: '1939-09-01', type: 'point' },
  //   { id: 4, content: 'Battle of Dunkirk', start: '1940-05-26', type: 'range', end: '1940-06-04', className: 'battle-event' },
  //   { id: 5, content: 'Pearl Harbor Attack', start: '1941-12-07', type: 'point' },
  //   { id: 6, content: 'D-Day Invasion', start: '1944-06-06', end: '1945-06-06', type: 'background', className: 'd-day-event' },
  //   { id: 7, content: 'Battle of Stalingrad', start: '1942-08-23', type: 'range', end: '1943-02-02', className: 'battle-event' },
  //   { id: 8, content: 'Atomic Bombing of Hiroshima', start: '1945-08-06', type: 'point' },
  //   { id: 9, content: 'Atomic Bombing of Nagasaki', start: '1945-08-09', type: 'point' },
  // ]);

    // const timelineList = useSelector(state => state.timelineList);
  // const { error, loading, timelines } = timelineList;

  // const timeline = timelines.find(item => item.id === id)
