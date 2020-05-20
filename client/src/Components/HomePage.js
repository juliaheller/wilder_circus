import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Col, Row, Toast } from 'react-bootstrap';

// services
import UserService from '../services/UserService';

//components
import Header from './Header';
import Home from './Home';
import About from './About';
import Performances from './Performances';
import Prices from './Prices';
import Newsletter from './Newsletter';
import Contact from './Contact';
import UserList from '../Components/admin/UserList';

export default function Homepage() {
    const [name, setName] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false);
    const [showError, setShowError] = useState(false);

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };
    const lastNameChangeHandler = (event) => {
        setLastname(event.target.value);
    };

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    };

    const addUser = (event) => {
        event.preventDefault();
        let user = {
            name: name,
            lastName: lastName,
            email: email,
        };
        UserService.addUser(user)
            .then((user) => {
                console.log(user);
                if (user.errors) {
                    setShowError(true);
                } else {
                    setName('');
                    setLastname('');
                    setEmail('');
                    setShow(true);
                }
            })
            .catch((error) => {
                console.error(error);
                setShowError(true);
            });
    };

    return (
        <Router>
            <Header />
            <Row>
                <Col lg={12} xs={12} s={12} mg={12}>
                    <Toast
                        onClose={() => setShow(false)}
                        show={show}
                        delay={3000}
                        animation
                        autohide
                        style={{
                            minWidth: '200px',
                            borderRadius: '10px',
                            backgroundColor: 'green',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}>
                        <Toast.Header>
                            <h1 className='mr-auto'>Subscribed!</h1>
                        </Toast.Header>
                        <Toast.Body>
                            Thank you for subscribing to our awesome newsletter!
                            See you soon!
                        </Toast.Body>
                    </Toast>
                </Col>
            </Row>
            <Row>
                <Col lg={12} xs={12} s={12} mg={12}>
                    <Toast
                        onClose={() => setShowError(false)}
                        show={showError}
                        delay={3000}
                        animation
                        autohide
                        style={{
                            minWidth: '200px',
                            borderRadius: '10px',
                            backgroundColor: 'red',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}>
                        <Toast.Header>
                            <h1 className='mr-auto'>Something went wrong!</h1>
                        </Toast.Header>
                        <Toast.Body>
                            Did you put in your correct firstname, lastname and
                            email address?
                        </Toast.Body>
                    </Toast>
                </Col>
            </Row>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/performances'>
                    <Performances />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/prices'>
                    <Prices />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/newsletter'>
                    <Newsletter
                        addUser={addUser}
                        nameChangeHandler={nameChangeHandler}
                        lastNameChangeHandler={lastNameChangeHandler}
                        emailChangeHandler={emailChangeHandler}
                        name={name}
                        lastName={lastName}
                        email={email}
                    />
                </Route>
                <Route path='/admin'>
                    <UserList
                        nameChangeHandler={nameChangeHandler}
                        lastNameChangeHandler={lastNameChangeHandler}
                        emailChangeHandler={emailChangeHandler}
                    />
                </Route>
            </Switch>
        </Router>
    );
}
