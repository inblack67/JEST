const axios = require('axios');

const fetch = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/1`);
    console.log(res.data.name);
}

fetch();