import { useState } from 'react';
import { Row, Col, ButtonGroup, Button, Card } from 'react-bootstrap';

const EventDetailsButtonBar = ({ itemToEdit }) => {
  const [openEventDetails, setOpenEventDetails] = useState(false);

  const leftBorderStyle = {
    borderTopLeftRadius: '6px',
    borderBottomLeftRadius: '6px',
  }

  const rightBorderStyle = {
    borderTopRightRadius: '6px',
    borderBottomRightRadius: '6px',
  }
  return (
    <Row className='d-flex justify-content-center mt-1 mx-2 fixed-top' >
      {itemToEdit && itemToEdit.id ? (
        <div  >
          <Col className='d-flex justify-content-center'>
            <ButtonGroup className='shadow-sm' >

              <Button
                style={leftBorderStyle}
                className='btn-sm  ' variant='dark'>
                <i className='bi bi-trash3-fill fs-6' ></i>
              </Button>

              {/* bar button with date details */}
              <Button variant='dark border-0 ' as='div' onClick={() => setOpenEventDetails(!openEventDetails)}>
                <span className='' >{new Date(itemToEdit.start).toLocaleString('en-GB', { hour12: false })} - {new Date(itemToEdit.end).toLocaleString('en-GB', { hour12: false })}</span>
                <span className='fw-bold'> {itemToEdit.content}</span>
              </Button>

              <Button
                style={rightBorderStyle}
                className='btn-sm  ' variant='dark '>
                <i className='bi-pencil-square fs-6' ></i>
              </Button>
            </ButtonGroup>
          </Col>
          <div className=' ' >
            <Row>

              {/* quick fix! - empty column to close the details card when clicked outside of it in the upper portion */}
              <Col onClick={() => setOpenEventDetails(false)}  ></Col>

              {/* card is in a div that stretches over the graph and doesnt allow clicking on it to switch event */}
              {/* should change the position to fixed */}
              <Col className='mt-2' lg={4} md={6} sm={8} xs={12} >
                {openEventDetails && (
                  <Card className='eventDetailsCard'  >
                    <Card.Body>
                      <Card.Title  >
                        {itemToEdit.content}
                      </Card.Title>
                      <Card.Text as='div' >
                        <span>
                          {itemToEdit.notesDetails}
                        </span>

                        <br></br>
                        <i><span style={{ fontSize: 'small', fontWeight: 'lighter', opacity: '50%' }} id='startEndDates'>
                          <span>From: {new Date(itemToEdit.start).toLocaleString('en-GB', { hour12: false }).split(',')[0]}</span>
                          <br></br>
                          <span>To: {new Date(itemToEdit.end).toLocaleString('en-GB', { hour12: false }).split(',')[0]}</span>
                        </span></i>
                      </Card.Text>
                    </Card.Body>

                    {/* close details card button */}
                    <Card.Footer className='border-0 p-0 pb-1 eventCardDetailsFooter'>
                      <div className='d-flex justify-content-center'>
                        <Button
                          onClick={() => setOpenEventDetails(false)}
                          className='px-2 py-1 border-0' variant='light'
                          style={{ backgroundColor: 'transparent' }} >
                          <i className='bi bi-x-lg' ></i>
                        </Button>
                      </div>
                    </Card.Footer>
                  </Card>
                )}


              </Col>

              {/* quick fix! - empty column to close the details card when clicked outside of it in the upper portion */}
              <Col onClick={() => setOpenEventDetails(false)}  ></Col>
            </Row>

          </div>
        </div>

      ) : (<div></div>)}

    </Row >
  );
};

export default EventDetailsButtonBar;