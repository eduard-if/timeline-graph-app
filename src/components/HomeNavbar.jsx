import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, InputGroup, Nav, NavItem, NavLink, Navbar, Offcanvas, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { gridView, listView, tableView } from '../actions/uiActions';

const HomeNavbar = ({ handleShowCreateTimelineModal }) => {
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
        style={{ backdropFilter: 'blur(20px)' }}
        className='sticky-top justify-content-center'
      >
        <div className='d-flex text-dark fs-3 px-3 pt-2 pb-1 fw-bold justify-content-between w-100'>
          <Navbar.Brand href='/' className='navbarBrandText '>
            <i className='bi bi-bar-chart-steps'></i> timegraph
          </Navbar.Brand>

          <InputGroup className='w-75'>
            <Form.Control
              type='search'
              placeholder='Search'
              className='bg-light searchNavbar'
              aria-label='Search'
            />
            <InputGroup.Text className='bg-light'>
              <i className='bi bi-search' ></i>
            </InputGroup.Text>
          </InputGroup>

          <Button
            variant='dark'
            className='fs-4 ms-5 bg-transparent text-dark border-0'
            onClick={handleShow}>
            <i className='bi bi-person-circle '></i>
          </Button>

        </div>

        <div

          className='d-flex justify-content-center shadow px-3 py-2 bg-dark w-100'>

          <Nav.Item >
            <Button
              variant='outline-secondary'
              onClick={handleListGridView}
              className='rounded-pill border-0 customButtonPadding mt-2 px-3'
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
          </Nav.Item>

          <Nav.Item className='d-none d-sm-none d-md-block mx-1'>
            <Button
              onClick={handleShowCreateTimelineModal}
              variant='outline-secondary'
              className='rounded-pill border-0 customButtonPadding '
            >
              <span
                className='fs-6 align-middle pe-2'
              >New</span>
              <i className='bi bi-plus-circle-fill fs-4 align-middle'></i>
            </Button>
          </Nav.Item>

          <Nav.Item>
            <Button
              variant='outline-secondary'
              onClick={handleTableView}
              className='rounded-pill border-0 customButtonPadding mt-2 px-3 '
            >
              <i
                className='bi bi-table '
                style={{
                  fontSize: 'larger',
                  paddingRight: '0.2rem',

                }}></i>
              <span className=''>Table</span>
            </Button>
          </Nav.Item>
        </div >

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