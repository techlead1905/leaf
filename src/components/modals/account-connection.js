import React from 'react';
import { Modal, Form, Row, Col, Button } from 'react-bootstrap';
import ConnectImage from '../../assets/images/connect.png';
import './modal.scss';

const ConnectionModal = ({ open, onConnect }) => (
  <Modal
    className='connection-modal'
    show={open}
    onHide={onConnect}
    backdrop='static'
    keyboard={false}
    centered
  >
    <Modal.Header>
      <img src={ConnectImage} alt='connect' />
      <h1>You currently have no accounts, start by connecting</h1>
    </Modal.Header>
    <Modal.Body>
      <Button onClick={onConnect}>Connect Now</Button>
      <Form>
        <Row className='first'>
          <Col>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder='John Doe' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='email'>
              <Form.Label>E-mail</Form.Label>
              <Form.Control type='email' placeholder='error@gmail.com' />
            </Form.Group>
          </Col>
        </Row>
        <Row className='second'>
          <Col>
            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Modal.Body>
  </Modal>
);

export default ConnectionModal;
