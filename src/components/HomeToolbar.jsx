import React, { useState } from 'react';
import { Button, Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { gridView, listView, tableView } from '../actions/uiActions';

const HomeToolbar = ({ handleShowCreateTimelineModal }) => {
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
      <Nav className='justify-content-center mt-3' >

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
            variant='outline-dark'
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
      </Nav >
      <hr
        className=' mb-4 pt-0 w-25 mx-auto'
        style={{
          opacity: '15%'
        }}
      ></hr>
    </>
  );
};

export default HomeToolbar;