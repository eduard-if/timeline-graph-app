import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { Form, Button, Row, Col } from 'react-bootstrap';
// import { register } from '../actions/userActions';

const RegisterPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');

    const dispatch = useDispatch();

    const location = useLocation();
    const history = useNavigate();
    return (
        <FormContainer>
            <h1 className='m-3' align='center'>Register</h1>
            {/* {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />} */}

            <Form
                //  onSubmit={submitHandler} 
                className='p-2'>

                <Form.Group controlId='name' className='m-2'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type='name'
                        placeholder='Enter Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email' className='m-2'>
                    <Form.Label>Email Adress</Form.Label>
                    <Form.Control
                        required
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password' className='m-2'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='passwordConfirm' className='m-2'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button className='m-2' type='submit' variant='primary'>Create Account</Button>
            </Form>
            <Row className='py-3'>
                <Col className='ms-3'>
                    {/* Already have an account? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Sign In</Link> */}
                </Col>
            </Row>
        </FormContainer>
    );
};

export default RegisterPage;