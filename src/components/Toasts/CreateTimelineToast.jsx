import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Toast, ToastContainer } from 'react-bootstrap';
import { HiOutlineCheckCircle, HiMiniArrowUpTray, HiOutlineExclamationTriangle } from 'react-icons/hi2';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CreateTimelineToastToast = ({ showToast, setShowToast, id }) => {
  const timelineCreate = useSelector(state => state.timelineCreate);
  const { error, loading, timeline } = timelineCreate;

  useEffect(() => {
    console.log('timelinecreate', timelineCreate)
    console.log('timelinecreate2', timeline)
  }, [timelineCreate])

  return (

    <Toast
      onClose={() => setShowToast(false)}
      show={showToast}
      delay={5000}
      autohide
      className={!error ? 'successToast' : 'errorToast'}
      style={{
        borderRadius: '10px',
      }}>
      <Toast.Header className='bg-transparent border-0' >
        {!error ? (
          <>
            <HiOutlineCheckCircle className='fs-2 me-1 text-success' />
            <span className='me-auto fw-light text-dark fs-5'>Timeline created</span>
          </>
        )
          : <>
            <HiOutlineExclamationTriangle className='fs-2 me-1 text-danger' />
            <span className='me-auto fw-light text-dark fs-5'>Something went wrong</span>
          </>
        }
      </Toast.Header>
      <Toast.Body
        className='bg-transparent  text-center rounded m-2 pt-1'
      >
        {!error ? (
          <Row className='align-items-center'>
            <Col className='' >
              <span className='fw-light' >
                {timeline && !loading && !error && timeline.id ? (

                  timeline.title.length > 35 ? timeline.title.slice(0, 35) + '...' : timeline.title

                ) : ''}
              </span>
            </Col>
            <Col>
              <Link to={`timeline/${timeline && !loading && !error && timeline.id ? timeline.id : ''}`} >
                <Button
                  variant='primary'
                  className='rounded opacity-75 text-light fw-light'
                >
                  Open <HiMiniArrowUpTray className='mb-1' />
                </Button>
              </Link>
            </Col>
          </Row>
        )
          : <span className='text-danger fw-bold' >{error}</span>
        }
      </Toast.Body>
    </Toast>

  )
}

export default CreateTimelineToastToast;