import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteEditModals from './DeleteEditModals';

const TimelineTableView = () => {
  const timelineList = useSelector(state => state.timelineList);
  const { error, loading, timelines } = timelineList;

  // const [showEdit, setShowEdit] = useState(false);
  // const [itemToEdit, setItemToEdit] = useState(undefined);

  // const handleCloseEdit = () => setShowEdit(false);

  // const handleShowEdit = () =>
  //   setShowEdit(true);



  // const [showDelete, setShowDelete] = useState(false);

  // const handleCloseDelete = () => setShowDelete(false);
  // const handleShowDelete = () => setShowDelete(true);



  return (
    <>
      <Container
        style={{
          maxHeight: '70vh',
          overflow: 'auto',
          padding: 0,
        }}
      >
        <Table bordered hover
          variant=''
          className='text-nowrap'
          size='sm'
        >
          <thead className='table-dark' >
            <tr>
              <th>Actions</th>
              <th>Title</th>
              <th >Description</th>
              <th>Last Updated</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody className='table-group-divider table-light'>
            {timelines.map((timeline, index) => (
              <tr key={index} className=''>
                <td className='align-middle text-center'>
                  <ButtonGroup aria-label='edit' className='' size=''>
                    <Button
                      // onClick={handleShowDelete}
                      variant='outline-danger'
                      className=''
                      style={{
                        paddingTop: 0,
                        paddingBottom: 0,
                        paddingLeft: '0.7rem',
                        paddingRight: '0rem',
                        fontSize: 'large',
                        marginRight: '0rem',
                        border: 'none',
                      }}
                    >
                      <i className='bi bi-trash3-fill pe-2' ></i>
                    </Button>
                    <Button
                      variant='outline-primary'
                      // onClick={handleShowEdit()}
                      className=''
                      style={{
                        paddingTop: 0,
                        paddingBottom: 0,
                        paddingLeft: '0.4rem',
                        paddingRight: '0.2rem',
                        fontSize: 'large',
                        border: 'none',
                      }}
                    >
                      <i className='bi-pencil-square pe-2' ></i>
                    </Button>
                  </ButtonGroup>
                </td>
                <td >
                  <Link to={`timeline/${timeline.id}`}>
                    {timeline.title.length > 35 ? timeline.title.slice(0, 35) + '...' : timeline.title}
                  </Link>
                </td>
                <td>{
                  timeline.description && timeline.description.length > 50 ? timeline.description.slice(0, 50) + '...' : timeline.description
                }</td>
                <td>{new Date(timeline.lastUpdated).toLocaleString('en-GB', { hour12: false })}</td>
                <td>{new Date(timeline.createdAt).toLocaleString('en-GB', { hour12: false })}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      {/* <DeleteEditModals
        showEdit={showEdit}
        handleCloseEdit={handleCloseEdit}
        itemId={itemToEdit}
        showDelete={showDelete}
        handleCloseDelete={handleCloseDelete}
      /> */}
    </>
  );
};

export default TimelineTableView;