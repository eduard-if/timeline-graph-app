import React, { useEffect } from 'react';
import { Card, CardImg } from 'react-bootstrap';

const HomeTimelineComponent = ({ data }) => {
    // useEffect(() => {
    //     console.log(data);
    // }, [data]);

    const { title, description, variant, border, updated, created } = data;

    let color = variant ? variant : undefined
    return (
        <Card
            className='homeCardHover overflow-hidden'
            as='div'
            bg={variant}
            text={variant === 'light' ? 'dark' : 'white'}
            border={border}
        >
            {data.img && (
                <CardImg src={data.img} className='overflow-hidden homeCardImg' />
            )}
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Footer className='fst-italic fw-light opacity-50 homeCardFooter'>
                Last Updated: {updated}
            </Card.Footer>
        </Card>
    );
};

export default HomeTimelineComponent;