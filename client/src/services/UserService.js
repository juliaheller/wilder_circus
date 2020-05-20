const apiURL = './users/';

export default {
    /**
     * Updates a user
     * @param user_id string unique id of the user
     * @param newData object of new data for the user
     * @returns {Promise<any>}
     */
    async updateUser(user_id, newData) {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData),
        };
        const response = await fetch(apiURL + user_id, requestOptions);
        const data = await response.json();

        return data;
    },

    async getUsers() {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data.users;
    },

    async addUser(user) {
        console.log(user);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        };
        const response = await fetch(apiURL, requestOptions);
        const data = await response.json();
        return data;
    },

    async deleteUser(user_id) {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };
        const response = await fetch(apiURL + user_id, requestOptions);
        const data = await response.json();
        return data;
    },
};
