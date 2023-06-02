import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import HomeTimelineComponent from './HomeTimelineComponent';
import { data } from '../dummyData.js'

const HomeTimelineContainer = () => {

    // useEffect(() => {
    //     console.log(data)
    // }, [data]);

    const dataImg = {
        title: 'Timeline Title',
        description: 'Lorem ipsum description etc.',
        updated: '01/06/2023',
        created: '01/06/2023',
        variant: 'light',
        border: 'dark',
        img: 'https://images.pexels.com/photos/4652275/pexels-photo-4652275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }

    const dataImg2 = {
        title: 'Timeline Title',
        description: 'Lorem ipsum description etc. Lorem ipsum description etc.Lorem ipsum description etc.',
        updated: '01/06/2023',
        created: '01/06/2023',
        variant: 'light',
        border: 'dark',
        img: 'https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-painter-fresco-159862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-painter-fresco-159862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }

    return (

        <Row className=''>
            {data.map((timeline, index) => (
                <Col xs={12} sm={12} md={4} lg={3} className='mb-4' key={index} >
                    <HomeTimelineComponent data={timeline} />
                </Col>
            ))}

        </Row>

    );
};

export default HomeTimelineContainer;