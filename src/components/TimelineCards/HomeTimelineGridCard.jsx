import React from 'react';
import { Button, Card, CardImg, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { BsInfoCircle, BsInfoCircleFill } from 'react-icons/bs';

const HomeTimelineGridCard = ({
  data,
  handleShowDelete,
  handleShowEdit,
  handleShowInfoDetails,
}) => {
  const md = useMediaQuery({ maxWidth: 992 });

  const {
    title,
    description,
    bgColor,
    textColor,
    titleColor,
    borderColor,
    lastUpdated,
    id,
  } = data;

  return (
    <>
      <Card
        className='homeCardHover overflow-hidden '
        as='div'
        style={{
          backgroundColor: bgColor,
          color: textColor,
          borderColor: borderColor,
        }}
      >
        {data.imageUrl && (
          <Link to={`timeline/${id}`}>
            <CardImg
              src={data.imageUrl}
              className='overflow-hidden homeCardImg shadow-sm'
              style={{
                maxHeight: md ? '50vh' : '30vh',
              }}
            />
          </Link>
        )}
        <Card.Body>
          <Link
            to={`timeline/${id}`}
            className='titleRouterLink '
            style={{ color: `${titleColor}` }}
          >
            <Card.Title className='mb-0 cardTitle'>
              {title}
              <hr className='m-0 mt-1 cardTitleDivider' />
            </Card.Title>
          </Link>

          <Card.Text>
            {description && description.length > 100
              ? description.slice(0, 100) + '...'
              : description}
          </Card.Text>
        </Card.Body>
        <Card.Footer className='py-1'>
          <Row className='justify-content-between fst-italic fw-light opacity-50 homeCardFooter'>
            <Col
              xs={8}
              className='pt-1'
              onClick={() => handleShowInfoDetails(id)}
              style={{ cursor: 'pointer' }}
            >
              <BsInfoCircle className='mb-1 me-1' />
              Last Updated:{' '}
              {
                new Date(lastUpdated)
                  .toLocaleString('en-GB', { hour12: false })
                  .split(',')[0]
              }
            </Col>
            <Col xs={3} className='d-flex  ps-3 pe-1 justify-content-end'>
              <Button
                onClick={() => handleShowDelete(id)}
                variant='dark'
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
                  color: textColor,
                }}
              >
                <i className='bi bi-x-lg'></i>
              </Button>
              <Button
                onClick={() => handleShowEdit(id)}
                variant='dark'
                className='rounded'
                style={{
                  paddingTop: 0,
                  paddingBottom: 0,
                  paddingLeft: '0.5rem',
                  paddingRight: '0.5rem',
                  fontSize: 'large',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: textColor,
                }}
              >
                <i className='bi bi-three-dots'></i>
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};

export default HomeTimelineGridCard;
