import React, { useEffect, useState } from 'react';
import { Button, Card, CardImg, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CardFooterEditModals from './CardFooterEditModals';


const HomeTimelineComponent = ({ data }) => {
    // fix the title LINK color conflict

    const [showEdit, setShowEdit] = useState(false);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const [showDelete, setShowDelete] = useState(false);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    // redux state when component is changed/deleted to rerender timeline container

    // useEffect(() => {
    //     console.log(data);
    // }, [data]);

    const { title, description, variant, border, updated, created } = data;

    let color = variant ? variant : undefined
    return (
        <>
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
                    <Link to={`timeline/${title}`} className='titleRouterLink ' style={{ color: `${variant === 'light' ? 'dark' : 'white'}` }}>
                        <Card.Title className='mb-0 cardTitle'>
                            {title}
                            <hr className='m-0 mt-1 cardTitleDivider' />
                            {/* <i className='bi bi-link-45deg opacity-25 align-middle titleRouterLinkIcon text-nowrap'></i> */}
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
                                onClick={handleShowDelete}
                                variant={`${variant}`}
                                className='rounded'
                                style={{
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    paddingLeft: '0.5rem',
                                    paddingRight: '0.5rem',
                                    fontSize: 'large',
                                    marginRight: '0.3rem'
                                }}
                            >
                                <i className='bi bi-x-lg' ></i>
                            </Button>
                            <Button
                                onClick={handleShowEdit}
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

            <CardFooterEditModals
                showEdit={showEdit}
                handleCloseEdit={handleCloseEdit}
                data={data}
                showDelete={showDelete}
                handleCloseDelete={handleCloseDelete}
            />
        </>
    );
};

export default HomeTimelineComponent;