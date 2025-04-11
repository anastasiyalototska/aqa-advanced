const axios = require('axios');

module.exports = class CustomControllers {
  async createUser(name, job) {
    const response = await axios.post(
      'https://reqres.in/api/users',
      { name, job }, 
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    return response;
  }
};

