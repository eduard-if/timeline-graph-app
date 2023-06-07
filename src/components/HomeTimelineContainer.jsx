import React, { useEffect } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import HomeTimelineComponent from './HomeTimelineCard';
import { data } from '../dummyData.js'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { listTimelines } from '../actions/timelineActions';
import Loader from './Loader';
import HomeTimelineList from './HomeTimelineList';
import HomeTimelineCard from './HomeTimelineCard';
import { useMediaQuery } from 'react-responsive';
import TimelineTableView from './TimelineTableView';

const HomeTimelineContainer = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const md = useMediaQuery({ maxWidth: 992 })

    const timelineList = useSelector(state => state.timelineList);
    const { error, loading, timelines } = timelineList;

    const { viewModeHome } = useSelector(state => state.viewModeHome)


    useEffect(() => {
        // console.log(data)

        dispatch(listTimelines());
    }, [dispatch]);

    return (
        <>
            {loading ? <Loader /> :


                (viewModeHome === 'list' ?
                    <div className='d-flex justify-content-center'>
                        <ListGroup variant='flush' className={!md ? 'w-50' : 'w-100'} >
                            {timelines.map((timeline, index) => (
                                <ListGroup.Item key={index} className='py-3 '>
                                    <HomeTimelineList data={timeline} />
                                </ListGroup.Item>
                            ))}

                        </ListGroup>
                    </div>
                    : viewModeHome === 'grid' ?
                        <Row className=''>
                            {timelines.map((timeline, index) => (

                                <Col xs={12} sm={12} md={4} lg={3} className='mb-4' key={index} >
                                    <HomeTimelineCard data={timeline} />
                                </Col>


                            ))}

                        </Row>
                        : viewModeHome === 'table' ?
                            <TimelineTableView />
                            : <h1>error</h1>
                )
            }


        </>
    );
};

export default HomeTimelineContainer;