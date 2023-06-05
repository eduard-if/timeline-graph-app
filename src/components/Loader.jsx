import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <Spinner animation='grow' role='status' variant='dark'
            style={{
                height: '100px',
                width: '100px',
                margin: 'auto',
                display: 'block',
                marginTop: '30vh'
            }}
        >
            {/* <span className='sr-only'>Loading...</span> */}
        </Spinner>

    );
};

export default Loader;