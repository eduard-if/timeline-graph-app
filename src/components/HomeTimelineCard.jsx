import React, { useEffect, useState } from 'react';
import { Button, Card, CardImg, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import DeleteEditModals from './DeleteEditModals';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import { deleteTimeline } from '../actions/timelineActions';


const HomeTimelineCard = ({ data }) => {
  // data and useEffect in HomeTimelineContainer
  const md = useMediaQuery({ maxWidth: 992 })

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

  const { title, description, bgColor, textColor, titleColor, borderColor, lastUpdated, id } = data;


  return (
    <>
      <Card
        className='homeCardHover overflow-hidden'
        as='div'
        style={{
          backgroundColor: bgColor,
          color: textColor,
          borderColor: borderColor
        }}
      >
        {data.imageUrl && (
          <Link to={`timeline/${id}`}>
            <CardImg src={data.imageUrl}
              className='overflow-hidden homeCardImg shadow-sm'
              style={{
                height: md ? '100%' : '15vw'
              }}
            />
          </Link>
        )}
        <Card.Body>
          <Link to={`timeline/${id}`}
            className='titleRouterLink '
            style={{ color: `${titleColor}` }}>
            <Card.Title className='mb-0 cardTitle'>
              {title}
              <hr className='m-0 mt-1 cardTitleDivider' />
            </Card.Title>
          </Link>


          <Card.Text>
            {description && description.length > 100 ? description.slice(0, 100) + '...' : description}
          </Card.Text>
        </Card.Body>
        <Card.Footer className='py-1'>
          <Row className='justify-content-between fst-italic fw-light opacity-50 homeCardFooter'>
            <Col xs={8}
              className='pt-1'>
              Last Updated: {new Date(lastUpdated).toLocaleString('en-GB', { hour12: false })}
            </Col>
            <Col xs={3} className='d-flex  ps-3 pe-1 justify-content-end'>
              <Button
                onClick={handleShowDelete}
                className='rounded'
                style={{
                  paddingTop: 0,
                  paddingBottom: 0,
                  paddingLeft: '0.5rem',
                  paddingRight: '0.5rem',
                  fontSize: 'large',
                  marginRight: '0.3rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: textColor
                }}
              >
                <i className='bi bi-x-lg' ></i>
              </Button>
              <Button
                onClick={handleShowEdit}
                className='rounded'
                style={{
                  paddingTop: 0,
                  paddingBottom: 0,
                  paddingLeft: '0.5rem',
                  paddingRight: '0.5rem',
                  fontSize: 'large',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: textColor
                }}
              >
                <i className='bi bi-three-dots' ></i>
              </Button>
            </Col>
          </Row>

        </Card.Footer>
      </Card>

      <DeleteEditModals
        showEdit={showEdit}
        handleCloseEdit={handleCloseEdit}
        itemId={id}
        showDelete={showDelete}
        handleCloseDelete={handleCloseDelete}
      />
    </>
  );
};

export default HomeTimelineCard;