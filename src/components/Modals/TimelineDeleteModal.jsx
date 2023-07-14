import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { HiExclamationCircle } from 'react-icons/hi2';
import { deleteTimeline } from '../../actions/timelineActions';
import { PuffLoader } from 'react-spinners';

const TimelineDeleteModal = ({
  showDelete,
  handleCloseDelete,
  itemId,
  setShowDeleteToast,
}) => {
  const dispatch = useDispatch();

  // const isInitialMount = useRef(true);

  const timelineList = useSelector((state) => state.timelineList);
  const { timelines } = timelineList;
  const timeline = timelines.filter((timeline) => timeline.id === itemId);
  const { title, id } = timeline[0];

  const timelineDelete = useSelector((state) => state.timelineDelete);

  const handleSubmitDelete = () => {
    dispatch(deleteTimeline(id));
    handleCloseDelete();
    setShowDeleteToast(true);
  };

  // bugs in showing the loader, component rerenders after the timeline is deleted
  // throws error here --->  const { title, id } = timeline[0];
  // useEffect(() => {
  //     if (isInitialMount.current) {
  //         isInitialMount.current = false;
  //     } else if (!timelineDelete.loading) {
  //         handleCloseDelete();
  //         setShowDeleteToast(true);
  //     }
  // }, [timelineDelete.loading]);

  return (
    <Modal
      show={showDelete}
      onHide={handleCloseDelete}
      scrollable='true'
      centered
      animation={false}
    >
      <Modal.Header
        closeButton
        className='bg-danger border-0 text-light shadow-sm'
      >
        <Modal.Title>
          <i className='bi bi-trash3-fill pe-2'></i>
          Delete Timeline
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col className='text-decoration-underline text-center'>
              Are you sure you want to delete this timeline?
            </Col>
          </Row>

          <Row>
            <Col className='fw-bold fs-4 text-center mt-3'>{title}</Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className='justify-content-center border-0'>
        {timelineDelete.loading ? (
          <PuffLoader
            color='#17141f'
            role='status'
            className='mx-auto my-3'
            speedMultiplier={2}
          />
        ) : (
          <>
            <Button
              variant='light'
              className='rounded shadow-sm'
              onClick={handleCloseDelete}
            >
              Cancel <i className='bi bi-x-lg'></i>
            </Button>
            <Button
              variant='danger'
              className='rounded shadow-sm'
              onClick={handleSubmitDelete}
            >
              <HiExclamationCircle className='fs-5 align-top mt-1' /> Delete
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default TimelineDeleteModal;
