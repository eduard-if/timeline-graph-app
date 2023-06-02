import React, { useEffect } from 'react';
import { Button, Card, CardImg, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";


const HomeTimelineComponent = ({ data }) => {
    // fix the title LINK color conflict

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
                <Link to={`timeline/${title}`}>
                    <CardImg src={data.img} className='overflow-hidden homeCardImg shadow-sm' />
                </Link>
            )}
            <Card.Body>
                <Link to={`timeline/${title}`} className='titleRouterLink' style={{ color: `${variant === 'light' ? 'dark' : 'white'}` }}>
                    <Card.Title>
                        {title}
                    </Card.Title>
                </Link>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Footer className='py-1'>
                <Row className='justify-content-between fst-italic fw-light opacity-50 homeCardFooter'>
                    <Col xs={8}
                        className='pt-1'>
                        Last Updated: {updated}
                    </Col>
                    <Col xs={3} className='d-flex  ps-3 pe-1 justify-content-end'>
                        <Button
                            variant={`${variant}`}
                            className='rounded'
                            style={{
                                paddingTop: 0,
                                paddingBottom: 0,
                                paddingLeft: '0.5rem',
                                paddingRight: '0.5rem',
                                fontSize: 'large',
                            }}
                        >
                            <i className='bi bi-three-dots' ></i>
                        </Button>
                    </Col>
                </Row>

            </Card.Footer>
        </Card>
    );
};

export default HomeTimelineComponent;