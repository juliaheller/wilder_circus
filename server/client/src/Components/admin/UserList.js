import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

// services
import UserService from '../../services/UserService';

// components
import UserFormModal from './UserFormModal';

export default function UserList({
    nameChangeHandler,
    lastNameChangeHandler,
    emailChangeHandler,
}) {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [modalShow, setModalShow] = useState(false);

    const onChangeHandler = (e, type) => {
        switch (type) {
            case 'name':
                setUser(Object.assign({}, user, { name: e.target.value }));
                break;
            case 'lastName':
                setUser(Object.assign({}, user, { lastName: e.target.value }));
                break;
            case 'email':
                setUser(Object.assign({}, user, { email: e.target.value }));
                break;
        }
        console.warn(user);
    };
    const getUsers = () => {
        UserService.getUsers().then((users) => {
            setUsers(users);
        });
    };

    const updateUser = (event) => {
        console.log(user);
        UserService.updateUser(user._id, user).then((user) => {
            setModalShow(false);
            getUsers();
        });
    };

    const deleteUser = (user) => {
        console.log(user);
        UserService.deleteUser(user._id).then((user) => {
            setModalShow(false);
            getUsers();
        });
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <Container>
            <h1>Wild Circus Admin Panel</h1>
            <h2>Manage user infos for newsletter</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{user.name}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Button
                                        variant='success'
                                        onClick={() => {
                                            setModalShow(true);
                                            setUser(user);
                                        }}>
                                        Edit
                                    </Button>
                                    <Button
                                        variant='danger'
                                        onClick={(e) => {
                                            deleteUser(user);
                                        }}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <UserFormModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                selectedUser={user}
                onChangeHandler={onChangeHandler}
                updateUser={updateUser}
            />
        </Container>
    );
}
