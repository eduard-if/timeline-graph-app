import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, InputGroup, Nav, NavItem, NavLink, Navbar, Offcanvas, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { gridView, listView, tableView } from '../actions/uiActions';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const HomeNavbar = ({ handleShowCreateTimelineModal }) => {
  const md = useMediaQuery({ maxWidth: 992 })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  let { viewModeHome } = useSelector(state => state.viewModeHome);

  const handleListGridView = () => {
    if (viewModeHome === 'grid') {
      dispatch(listView())
    } else if (viewModeHome === 'list') {
      dispatch(gridView())
    } else if (viewModeHome === 'table') {
      dispatch(gridView())
    };
  };

  const handleTableView = () => {
    if (viewModeHome !== 'table') {
      dispatch(tableView());
    };
  };


  return (
    <>
      <Nav
        style={{ backdropFilter: 'blur(2px) grayscale(100%)' }}
        className='sticky-top justify-content-center mb-4 shadow-sm'
      >
        <div className='d-flex text-dark  px-3 pt-2 pb-2 fw-bold justify-content-between w-100 ' >
          <Link to={'/'} className='navbarBrandText fs-5 text-dark align-middle text-nowrap' style={{ textDecoration: 'none' }}>
            <i className='bi bi-bar-chart-steps'></i> {!md && (<span>timegraph</span>)}
          </Link>

          <Form className='w-50' >
            <Form.Control

              size='sm'
              type='search'
              placeholder='Search...'
              className='bg-light rounded'
              aria-label='Search'
            />
          </Form>



          <Button
            variant='dark'
            className=' bg-transparent text-dark border-0 p-0 px-2 fs-5'
            onClick={handleShow}>
            <i className='bi bi-person-circle ' ></i>
          </Button>

        </div>

        {/* <div

          className='d-flex justify-content-center px-3 py-2 bg-transparent w-100'>

          <span className='rounded p-1 bg-light ' >
            <Button
              variant='outline-dark'
              onClick={handleListGridView}
              className='rounded border-0  px-2 py-0 opacity-75'
            >

              {viewModeHome === 'grid' ? (
                <>
                  <i
                    className='bi bi-list-task align-middle'
                    style={{
                      fontSize: 'larger',
                      paddingRight: '0.1rem'
                    }}></i>
                  <span className='align-middle'>
                    List
                  </span>
                </>
              )
                : viewModeHome === 'list' ?
                  (<>
                    <i
                      className='bi bi-grid-fill align-middle '
                      style={{
                        fontSize: 'larger',
                        paddingRight: '0.1rem'
                      }}></i>
                    <span className='align-middle'>
                      Grid
                    </span>
                  </>
                  ) : (<>
                    <i
                      className='bi bi-grid-fill align-middle '
                      style={{
                        fontSize: 'larger',
                        paddingRight: '0.1rem'
                      }}></i>
                    <span className='align-middle'>
                      Grid
                    </span>
                  </>
                  )
              }
            </Button>



            <Button
              onClick={handleShowCreateTimelineModal}
              variant='outline-success'
              className='rounded border-0 py-0 mx-3 px-2'
            >
              <span
                className=' align-middle pe-2'
              >New</span>
              <i
                style={{ fontSize: 'larger' }}
                className='bi bi-plus-circle-fill  align-middle'></i>
            </Button>



            <Button
              variant='outline-dark'
              onClick={handleTableView}
              className='rounded border-0 opacity-75  py-0 px-2'
            >
              <i
                className='bi bi-table '
                style={{
                  fontSize: 'larger',
                  paddingRight: '0.2rem',

                }}></i>
              <span className=''>Table</span>
            </Button>
          </span>
        </div > */}

      </Nav>




      <Offcanvas show={show} onHide={handleClose} placement='end' className='eventsPageOffcanvas'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='navbarBrandText' >
            <i className='bi bi-bar-chart-steps'></i> timegraph
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Card className='cardTimelineOptions'>

            <Card.Header
              className='fw-light text-center'
              style={{ backgroundColor: 'transparent' }}
            >Timeline Options</Card.Header>
            <Card.Body>

            </Card.Body>

          </Card>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HomeNavbar;