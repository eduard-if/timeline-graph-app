import React, { useEffect, useState } from 'react';
import HomeNavbar from '../components/Navbars&Toolbars/HomeNavbar';
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  ListGroup,
  Nav,
  Row,
  Tab,
  Tabs,
  ToastContainer,
} from 'react-bootstrap';
import CreateTimelineModal from '../components/Modals/CreateTimelineModal';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Link, useLocation } from 'react-router-dom';
import { listTimelines } from '../actions/timelineActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import HomeTimelineGridCard from '../components/TimelineCards/HomeTimelineGridCard';
import HomeTimelineListCard from '../components/TimelineCards/HomeTimelineListCard';
import CreateTimelineToast from '../components/Toasts/CreateTimelineToast';
import { HiExclamationCircle } from 'react-icons/hi2';
import { PuffLoader } from 'react-spinners';
import TimelineEditModal from '../components/Modals/TimelineEditModal';
import TimelineDeleteModal from '../components/Modals/TimelineDeleteModal';
import DeleteTimelineToast from '../components/Toasts/DeleteTimelineToast';
import UpdateTimelineToast from '../components/Toasts/UpdateTimelineToast';
import { MdRefresh } from 'react-icons/md';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import {
  BsSortNumericDownAlt,
  BsSortNumericUp,
  BsSortNumericUpAlt,
} from 'react-icons/bs';
import TimelineInfoDetailsModal from '../components/Modals/TimelineInfoDetailsModal';

const HomePage = () => {
  const [showCreateTimelineModal, setShowCreateTimelineModal] = useState(false);
  const md = useMediaQuery({ maxWidth: 992 });
  const lg = useMediaQuery({ minWidth: 1200 });

  const [itemIdtoEdit, setItemIdtoEdit] = useState('');

  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showInfoDetails, setShowInfoDetails] = useState(false);

  const handleCloseInfoDetails = () => {
    setShowInfoDetails(false);
    setItemIdtoEdit('');
  };

  const handleShowInfoDetails = (id) => {
    setItemIdtoEdit(id);
    setShowInfoDetails(true);
  };

  const handleCloseCreateTimelineModal = () =>
    setShowCreateTimelineModal(false);
  const handleShowCreateTimelineModal = () => {
    setShowToast(false);
    setShowDeleteToast(false);
    setShowToast(false);
    setShowCreateTimelineModal(true);
  };

  const handleCloseEdit = () => {
    setShowEdit(false);
    setItemIdtoEdit('');
  };

  const handleShowEdit = (id) => {
    setItemIdtoEdit(id);
    setShowEdit(true);
    setShowDeleteToast(false);
    setShowToast(false);
  };

  const handleCloseDelete = () => {
    setShowDelete(false);
    setItemIdtoEdit('');
  };
  const handleShowDelete = (id) => {
    setItemIdtoEdit(id);
    setShowDelete(true);
    setShowDeleteToast(false);
    setShowToast(false);
  };

  const [showToast, setShowToast] = useState(false);

  const [showDeleteToast, setShowDeleteToast] = useState(false);

  const [showUpdateToast, setShowUpdateToast] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const dispatch = useDispatch();
  const location = useLocation();

  const timelineList = useSelector((state) => state.timelineList);
  const { error, loading, timelines } = timelineList;

  const [orderBy, setOrderBy] = useState('-lastUpdated');
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(listTimelines(orderBy, search));
  }, [dispatch, location, orderBy]);

  const handleSearch = () => {
    dispatch(listTimelines(orderBy, search));
    setSearch('');
  };

  const handleRefresh = () => {
    setSearch('');
    dispatch(listTimelines(orderBy));
  };

  return (
    <>
      <HomeNavbar
        handleShowCreateTimelineModal={handleShowCreateTimelineModal}
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <main className='pb-5 '>
        <Container className=' px-4 pb-4'>
          {loading ? (
            <PuffLoader
              color='#17141f'
              role='status'
              className='mx-auto'
              speedMultiplier={2}
              size={100}
            />
          ) : timelines && timelines.length === 0 ? (
            <Message variant='secondary'>
              <h1 className='text-center'>No Timelines</h1>
            </Message>
          ) : (
            <Tab.Container defaultActiveKey='grid'>
              {/*timelines grid card and list card tabs*/}
              <Row>
                <Col xs={12} className='mb-5'>
                  <Nav variant='underline' className='justify-content-center'>
                    <Nav.Item>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant='dark'
                          className='bg-transparent border-0 text-primary'
                        >
                          <i className='bi bi-funnel'></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu
                          className='rounded shadow border-0 px-2'
                          variant=''
                        >
                          <Dropdown.Header>Sort by</Dropdown.Header>
                          <Dropdown.Item
                            className='fw-light my-1 rounded'
                            active={orderBy === 'lastUpdated' ? true : false}
                            onClick={() => setOrderBy('lastUpdated')}
                          >
                            <BsSortNumericUpAlt className='fs-5 me-1' />
                            Last Updated Ascending
                          </Dropdown.Item>
                          <Dropdown.Item
                            className='fw-light mb-1 rounded'
                            active={orderBy === '-lastUpdated' ? true : false}
                            onClick={() => setOrderBy('-lastUpdated')}
                          >
                            <BsSortNumericDownAlt className='fs-5 me-1' />
                            Last Updated Descending
                          </Dropdown.Item>
                          <Dropdown.Item
                            className='fw-light mb-1 rounded'
                            active={orderBy === '-createdAt' ? true : false}
                            onClick={() => setOrderBy('-createdAt')}
                          >
                            <BsSortNumericUpAlt className='fs-5 me-1' />
                            Created Ascending
                          </Dropdown.Item>
                          <Dropdown.Item
                            className='fw-light mt-1 rounded'
                            active={orderBy === 'createdAt' ? true : false}
                            onClick={() => setOrderBy('createdAt')}
                          >
                            <BsSortNumericDownAlt className='fs-5 me-1' />
                            Created Descending
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='grid' className='px-3'>
                        <i className='bi bi-grid'></i>
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey='list' className='px-3'>
                        <i className='bi bi-list'></i>
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Button
                        variant='dark'
                        className='bg-transparent border-0 text-primary'
                        onClick={handleRefresh}
                      >
                        <MdRefresh />
                      </Button>
                    </Nav.Item>
                  </Nav>
                </Col>

                <Col xs={12}>
                  {timelines.details && (
                    <>
                      <Message variant='info'>
                        <h1 className='text-center fw-bold'>
                          <HiExclamationCircle className='mb-2' />{' '}
                          {timelines.details}
                        </h1>

                        <div className='text-center'>
                          <Link to={'/'}>Go Back</Link>
                        </div>
                      </Message>
                    </>
                  )}
                  <Tab.Content>
                    <Tab.Pane eventKey='grid' transition={false}>
                      <Row>
                        {!timelines.details &&
                          timelines.map((timeline, index) => (
                            <Col
                              xs={12}
                              sm={12}
                              md={6}
                              lg={4}
                              xl={3}
                              className='mb-4'
                              key={index}
                            >
                              <HomeTimelineGridCard
                                data={timeline}
                                handleShowDelete={handleShowDelete}
                                handleShowEdit={handleShowEdit}
                                handleShowInfoDetails={handleShowInfoDetails}
                                orderBy={orderBy}
                              />
                            </Col>
                          ))}
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey='list' transition={false}>
                      <div className='d-flex justify-content-center'>
                        <ListGroup
                          variant='flush'
                          className={!md ? 'w-50' : 'w-100'}
                        >
                          {!timelines.details &&
                            timelines.map((timeline, index) => (
                              <ListGroup.Item
                                key={index}
                                className='py-3 bg-transparent'
                              >
                                <HomeTimelineListCard
                                  data={timeline}
                                  handleShowDelete={handleShowDelete}
                                  handleShowEdit={handleShowEdit}
                                  handleShowInfoDetails={handleShowInfoDetails}
                                  orderBy={orderBy}
                                />
                              </ListGroup.Item>
                            ))}
                        </ListGroup>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          )}
        </Container>
      </main>

      {/*create timeline and scroll to top buttons */}

      <Button
        variant='secondary'
        className=' rounded-circle px-2 py-1 me-4 fs-6 shadow-sm'
        onClick={handleScrollToTop}
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          scale: '1.2',
          marginBottom: '6rem',
        }}
      >
        <i className='bi bi-chevron-up'></i>
      </Button>

      <Button
        variant='dark'
        className=' rounded-circle px-2 py-1 me-4 fs-6  shadow-sm'
        onClick={handleShowCreateTimelineModal}
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          scale: '1.5',
          marginBottom: '2rem',
        }}
      >
        <i className='bi bi-plus-lg'></i>
      </Button>

      <ToastContainer
        className='mb-4 mx-auto'
        style={{
          zIndex: 2,
          position: 'fixed',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <CreateTimelineToast
          showToast={showToast}
          setShowToast={setShowToast}
        />
        <DeleteTimelineToast
          showDeleteToast={showDeleteToast}
          setShowDeleteToast={setShowDeleteToast}
        />
        <UpdateTimelineToast
          showUpdateToast={showUpdateToast}
          setShowUpdateToast={setShowUpdateToast}
        />
      </ToastContainer>

      <CreateTimelineModal
        showCreateTimelineModal={showCreateTimelineModal}
        handleShowCreateTimelineModal={handleShowCreateTimelineModal}
        handleCloseCreateTimelineModal={handleCloseCreateTimelineModal}
        setShowToast={setShowToast}
      />

      {itemIdtoEdit !== '' && (
        <>
          <TimelineEditModal
            setShowUpdateToast={setShowUpdateToast}
            showEdit={showEdit}
            handleCloseEdit={handleCloseEdit}
            itemId={itemIdtoEdit}
          />
          <TimelineDeleteModal
            setShowDeleteToast={setShowDeleteToast}
            showDelete={showDelete}
            handleCloseDelete={handleCloseDelete}
            itemId={itemIdtoEdit}
          />

          <TimelineInfoDetailsModal
            showInfoDetails={showInfoDetails}
            handleCloseInfoDetails={handleCloseInfoDetails}
            itemId={itemIdtoEdit}
          />
        </>
      )}
    </>
  );
};

export default HomePage;
