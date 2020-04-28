const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = {
            firstName: 'Aman'
        }

        user['lastName'] = 'Bhardwaj'

        return user;
    },
    fetchUsers: async () => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/1`);
            return res;
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = functions;