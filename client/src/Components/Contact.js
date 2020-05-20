import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Contact() {
    return (
        <div>
            <h2 id='contact'>Contact Us</h2>
            <Form action='#'>
                <div id='formContent'>
                    <Form.Group>
                        <Form.Label for='email'>Email:</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Get in contact - get wild!</Form.Label>
                        <Form.Control as='textarea' rows='4' />
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
}
