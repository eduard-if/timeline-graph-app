import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const FormContainer = ({ children }) => {
    return (
        <Container fluid
            style={{

                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}
        >
            <Row

                className=' justify-content-center' >
                <Col xs={12} md={4}
                    className='shadow rounded'
                >
                    {children}
                </Col>
            </Row>
        </Container>
    );
};

export default FormContainer;