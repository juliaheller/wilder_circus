const UserService = require('../services/userService');
const { validationResult } = require('express-validator');

class UsersController {
    getById(req, res) {
        UserService.getUserById(req.params.id)
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                return res.status(404).json({
                    errors: [
                        {
                            msg: 'Could not find user with id ' + req.params.id,
                        },
                    ],
                });
            });
    }

    getAll(req, res) {
        let filter = {};

        UserService.getUsers(filter).then((result) => {
            res.send({ users: result });
        });
    }

    create(req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        UserService.createUser(req.body).then((result) => {
            res.status(201).send(result);
        });
    }

    update(req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(500).json({ errors: errors.array() });
        }

        UserService.updateUser(req.params.id, req.body)
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                return res
                    .status(500)
                    .json({ errors: [{ msg: 'Could not update user' }] });
            });
    }

    delete(req, res) {
        UserService.deleteUser(req.params.id).then((result) => {
            res.send(result);
        });
    }
}

module.exports = new UsersController();
