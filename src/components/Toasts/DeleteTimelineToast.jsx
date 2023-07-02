import React, { useEffect } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { HiOutlineExclamationTriangle } from 'react-icons/hi2';
import { BsRecycle } from 'react-icons/bs'
import { useSelector } from 'react-redux';

const DeleteTimelineToastToast = ({ showDeleteToast, setShowDeleteToast }) => {
    const timelineDelete = useSelector(state => state.timelineDelete);
    const { error, loading, timeline } = timelineDelete;

    useEffect(() => {
        console.log('timelineDelete', showDeleteToast)
    }, [timelineDelete])

    return (

        <Toast
            onClose={() => setShowDeleteToast(false)}
            show={showDeleteToast}
            delay={3000}
            autohide
            className={!error ? 'warningToast' : 'errorToast'}
            style={{
                borderRadius: '10px',
            }}>
            <Toast.Header className='bg-transparent border-0' >
                {!error ? (
                    <>
                        <BsRecycle className='fs-4 me-2' />
                        <span className='me-auto fw-light text-dark fs-5'>Timeline deleted</span>
                    </>
                )
                    : <>
                        <HiOutlineExclamationTriangle className='fs-2 me-1 text-danger' />
                        <span className='me-auto fw-light text-dark fs-5'>Something went wrong</span>
                    </>
                }
            </Toast.Header>
            {error && (
                <Toast.Body className='bg-transparent  text-center rounded m-2 pt-1'>
                    <span className='text-danger fw-bold' >{error}</span>
                </Toast.Body>
            )}

        </Toast>

    )
}

export default DeleteTimelineToastToast;