const UserModel = require('../models/Users');

class UserService {
    async getUsers(filter) {
        let users = await UserModel.find(filter);
        return users;
    }

    async getUserById(user_id) {
        return await UserModel.findById(user_id);
    }

    async createUser(user) {
        let newUser = await UserModel.create(user);
        return newUser;
    }

    async deleteUser(user_id) {
        let user = await this.getUserById(user_id);

        await UserModel.findByIdAndRemove(user_id);

        return user;
    }

    async updateUser(user_id, update) {
        let user = await UserModel.findByIdAndUpdate(user_id, update, {
            new: true,
            runValidators: true,
        });

        return user;
    }
}

module.exports = new UserService();
