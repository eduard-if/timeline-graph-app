import React, { useState } from 'react';
import {
  Button,
  Card,
  Form,
  InputGroup,
  Nav,
  Offcanvas,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { BsSearch } from 'react-icons/bs';

const HomeNavbar = ({ search, setSearch, handleSearch }) => {
  const md = useMediaQuery({ maxWidth: 992 });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  return (
    <>
      <Nav
        style={{ backdropFilter: 'blur(2px) grayscale(100%)' }}
        className='sticky-top justify-content-center mb-4 shadow-sm'
      >
        <div className='d-flex text-dark  px-3 pt-2 pb-2 fw-bold justify-content-between w-100 '>
          <Link
            to={'/'}
            className='navbarBrandText fs-5 text-dark align-middle text-nowrap'
            style={{ textDecoration: 'none' }}
          >
            <i className='bi bi-bar-chart-steps'></i>{' '}
            {!md && <span>timegraph</span>}
          </Link>

          <Form className={!md ? 'w-50' : 'w-75'}>
            <InputGroup>
              <Form.Control
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSearch(search);
                  }
                }}
                size='sm'
                type='search'
                placeholder='Search...'
                className='bg-light'
                aria-label='Search'
                style={{
                  borderTopLeftRadius: '6px',
                  borderBottomLeftRadius: '6px',
                }}
              />
              <Button
                variant='outline-dark btn-sm'
                className=' border-0'
                onClick={handleSearch}
                style={{
                  borderTopRightRadius: '6px',
                  borderBottomRightRadius: '6px',
                }}
              >
                <BsSearch className='fs-5' />
              </Button>
            </InputGroup>
          </Form>

          <Button
            variant='dark'
            className=' bg-transparent text-dark border-0 p-0 px-2 fs-5'
            onClick={handleShow}
          >
            <i className='bi bi-person-circle '></i>
          </Button>
        </div>
      </Nav>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement='end'
        className='eventsPageOffcanvas'
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='navbarBrandText'>
            <i className='bi bi-bar-chart-steps'></i> timegraph
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Card className='cardTimelineOptions'>
            <Card.Header
              className='fw-light text-center'
              style={{ backgroundColor: 'transparent' }}
            >
              Timeline Options
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HomeNavbar;
