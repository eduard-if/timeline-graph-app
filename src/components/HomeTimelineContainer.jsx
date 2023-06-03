import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import HomeTimelineComponent from './HomeTimelineComponent';
import { data } from '../dummyData.js'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { listTimelines } from '../actions/timelineActions';

const HomeTimelineContainer = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const timelineList = useSelector(state => state.timelineList);
    const { error, loading, timelines } = timelineList;

    useEffect(() => {
        // console.log(data)

        dispatch(listTimelines());
    }, [dispatch]);


    return (

        <Row className=''>
            {timelines.map((timeline, index) => (
                <Col xs={12} sm={12} md={4} lg={3} className='mb-4' key={index} >
                    <HomeTimelineComponent data={timeline} />
                </Col>
            ))}

        </Row>

    );
};

export default HomeTimelineContainer;