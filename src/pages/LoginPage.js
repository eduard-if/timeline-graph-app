import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { Form, Button, Row, Col } from 'react-bootstrap';
// import { login } from '../actions/userActions';




const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const location = useLocation();
  const history = useNavigate();

  const redirect = location.search ? location.search.split('=')[1] : '/'

  // const urlParams = new URLSearchParams(location.search);
  // const redirect = urlParams.get('redirect') || '/';

  // const userLogin = useSelector(state => state.userLogin);
  // const { error, loading, userInfo } = userLogin;

  // useEffect(() => {
  //     window.scrollTo(0, 0);
  //     if (userInfo) {
  //         history(redirect)
  //     }
  // }, [history, redirect, userInfo, location]);

  // const submitHandler = (e) => {
  //     e.preventDefault();
  //     dispatch(login(email, password));
  // };

  return (
    <FormContainer >
      <h1 className='m-3' align='center '>Sign In</h1>

      {/* {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />} */}

      <Form
        //  onSubmit={submitHandler} 
        className='p-2'>

        <Form.Group controlId='email' className='m-2'>
          <Form.Label>Email Adress</Form.Label>
          <Form.Control
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
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >
          </Form.Control>
        </Form.Group>

        <Button className='m-2' type='submit' variant='primary'>Sign In</Button>
      </Form>

      <Row className='py-3'>
        <Col className='ms-3'>
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Create Account</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginPage;