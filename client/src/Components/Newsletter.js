import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

export default function Newsletter({
    addUser,
    nameChangeHandler,
    lastNameChangeHandler,
    emailChangeHandler,
    name,
    lastName,
    email,
}) {
    return (
        <div>
            <h1>Newsletter</h1>
            <p>
                Do you want to be the first to know about new acts and
                performances? Then sign up for our newsletter! We send it
                monthly.;
            </p>
            <Form>
                <Form.Row>
                    <Col>
                        <Form.Control
                            placeholder='First name'
                            value={name}
                            onChange={nameChangeHandler}
                            name='name'
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            placeholder='Last name'
                            value={lastName}
                            onChange={lastNameChangeHandler}
                            name='lastName'
                        />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId='formGridEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type='email'
                            name='email'
                            placeholder='Enter email'
                            value={email}
                            onChange={emailChangeHandler}
                        />
                    </Form.Group>
                </Form.Row>
                <Button onClick={addUser} variant='primary' type='submit'>
                    Submit
                </Button>
            </Form>
        </div>
    );
}
