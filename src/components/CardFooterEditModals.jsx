import React from 'react';
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';


const CardFooterEditModals = ({ data, showEdit, handleCloseEdit, showDelete, handleCloseDelete }) => {
  const { title, description } = data;

  return (
    <div>
      <Modal show={showEdit} onHide={handleCloseEdit} className='' scrollable='true'>
        <Modal.Header closeButton className='bg-info text-light'>
          <Modal.Title>
            <i className='bi-pencil-square pe-2' ></i>
            Edit Timeline
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                placeholder={title}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId='description'
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as='textarea' rows={3} placeholder={description} />
            </Form.Group>

            <Form.Group className='mb-3' controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder=''
              />
            </Form.Group>

            <Form.Group
              className='mb-3'
              controlId='bgColor'
            >
              <Row className='justify-content-start'>
                <Col xs={4}>
                  <Form.Label className='mt-2'>Background color</Form.Label>

                </Col>
                <Col xs={1}>
                  <Form.Control
                    type='color'
                    rows={3} />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group
              className='mb-3'
              controlId='textColor'
            >
              <Row className='justify-content-start'>
                <Col xs={4}>
                  <Form.Label className='mt-2'>Text color</Form.Label>

                </Col>
                <Col xs={1}>
                  <Form.Control
                    type='color'
                    rows={3} />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group
              className='mb-3'
              controlId='borderColor'
            >
              <Row className='justify-content-start'>
                <Col xs={4}>
                  <Form.Label className='mt-2'>Border color</Form.Label>

                </Col>
                <Col xs={1}>
                  <Form.Control
                    type='color'
                    rows={3} />
                </Col>
              </Row>
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseEdit}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleCloseEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDelete} onHide={handleCloseDelete} className='' scrollable='true' centered>
        <Modal.Header closeButton className='bg-danger text-light'>
          <Modal.Title  >
            <i className='bi bi-trash3-fill pe-2' ></i>
            Delete Timeline

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col className='text-decoration-underline text-center'>
                Are you sure you want to delete this timeline?
              </Col>
            </Row>

            <Row>
              <Col className='fw-bold fs-4 text-center mt-3' >
                {title}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-info" onClick={handleCloseDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleCloseDelete}>
            Delete!
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default CardFooterEditModals;