import React, { useEffect } from 'react';
import { Toast } from 'react-bootstrap';
import { HiOutlineExclamationTriangle } from 'react-icons/hi2';
import { BsDatabaseCheck } from 'react-icons/bs'
import { useSelector } from 'react-redux';

const UpdateTimelineToast = ({ showUpdateToast, setShowUpdateToast }) => {
    const timelineUpdate = useSelector(state => state.timelineUpdate);
    const { error, loading, timeline } = timelineUpdate;

    // useEffect(() => {
    //     console.log('timelineUpdate', showUpdateToast)
    // }, [timelineDelete])

    return (

        <Toast
            onClose={() => setShowUpdateToast(false)}
            show={showUpdateToast}
            delay={3000}
            autohide
            className={!error ? 'infoToast' : 'errorToast'}
            style={{
                borderRadius: '10px',
            }}>
            <Toast.Header className='bg-transparent border-0' >
                {!error ? (
                    <>
                        <BsDatabaseCheck className='fs-4 me-2' />
                        <span className='me-auto fw-light text-dark fs-5'>Timeline updated</span>
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
    );
};

export default UpdateTimelineToast;