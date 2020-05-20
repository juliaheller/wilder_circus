import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form, Col } from 'react-bootstrap';

export default function UserFormModal({
    show,
    onHide,
    selectedUser,
    onChangeHandler,
    updateUser,
}) {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered>
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                    Edit User
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control
                                value={selectedUser.name}
                                onChange={(e) => onChangeHandler(e, 'name')}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                value={selectedUser.lastName}
                                onChange={(e) => onChangeHandler(e, 'lastName')}
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId='formGridEmail'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='email'
                                value={selectedUser.email}
                                onChange={(e) => onChangeHandler(e, 'email')}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Button
                        variant='primary'
                        type='button'
                        onClick={updateUser}>
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
