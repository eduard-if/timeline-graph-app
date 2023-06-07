import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EventsBottomNavbar from '../components/EventsBottomNavbar';
import { useDispatch, useSelector } from 'react-redux';
import EventsTopNavbar from '../components/EventsTopNavbar';
import { Button, Nav, NavLink } from 'react-bootstrap';

const TimelinePage = () => {
    const dispatch = useDispatch();
    // dispatch get events 
    // dispatch create, update, delete events

    const { id } = useParams();

    const timelineList = useSelector(state => state.timelineList);
    const { error, loading, timelines } = timelineList;

    const timeline = timelines.find(item => item.id === id)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div>
            <Nav className='justify-content-between px-1 py-1'>
                <Nav.Item>
                    <h2 >{timeline.title}</h2>
                </Nav.Item>
                <NavLink className='fs-4 '>
                    <i className='bi bi-person-circle'></i>
                </NavLink>
            </Nav>

            <EventsBottomNavbar />

        </div>
    );
};

export default TimelinePage;