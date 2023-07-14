import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { HiExclamationCircle } from 'react-icons/hi2';
import { deleteTimeline } from '../../actions/timelineActions';
import { PuffLoader } from 'react-spinners';
import { BsInfoCircle } from 'react-icons/bs';

const TimelineInfoDetailsModal = ({
  showInfoDetails,
  handleCloseInfoDetails,
  itemId,
}) => {
  const timelineList = useSelector((state) => state.timelineList);
  const { timelines } = timelineList;
  const timeline = timelines.filter((timeline) => timeline.id === itemId);
  const { title, id, description, imageUrl, lastUpdated, createdAt } =
    timeline[0];

  return (
    <Modal
      show={showInfoDetails}
      onHide={handleCloseInfoDetails}
      scrollable='true'
      centered
      animation={false}
    >
      <Modal.Header closeButton className='bg-transparent border-0 text-dark'>
        <Modal.Title>
          <BsInfoCircle className='mb-1 me-1' />
          Timeline Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className='bg-light rounded mb-2 py-2'>
            <Col md={4} xs={12} className='opacity-75'>
              Title:
            </Col>
            <Col md={8} xs={12} className='text-break fw-bold'>
              {title}
            </Col>
          </Row>
          <Row className='bg-light rounded mb-2 py-2'>
            <Col md={4} xs={12} className='opacity-75'>
              Created:
            </Col>
            <Col md={8} xs={12} className=''>
              {new Date(createdAt).toLocaleString('en-GB', { hour12: false })}
            </Col>
          </Row>

          <Row className='bg-light rounded mb-2 py-2'>
            <Col md={4} xs={12} className='opacity-75'>
              Last Updated:
            </Col>
            <Col md={8} xs={12} className=''>
              {new Date(lastUpdated).toLocaleString('en-GB', { hour12: false })}
            </Col>
          </Row>

          <Row className='bg-light rounded mb-2 py-2'>
            <Col md={4} xs={12} className='opacity-75'>
              Description:
            </Col>
            <Col md={8} xs={12} className='text-break'>
              {description}
            </Col>
          </Row>

          <Row className='bg-light rounded mb-2 py-2'>
            <Col md={4} xs={12} className='opacity-75'>
              Image URL:
            </Col>
            <Col md={8} xs={12} className='text-break'>
              {imageUrl}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className='justify-content-center border-0'>
        <Button
          variant='light'
          className='rounded shadow-sm'
          onClick={handleCloseInfoDetails}
        >
          Close <i className='bi bi-x-lg'></i>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TimelineInfoDetailsModal;
