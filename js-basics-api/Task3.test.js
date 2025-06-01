
const axios = require('axios');
const fetchData = require('./fetchData');

jest.mock('axios');

test('fetchData throws error on failure', async () => {
  axios.get.mockRejectedValue(new Error('Network error')); 

  try {
    await fetchData('https://fakeurl.com');
  } catch (error) {
    expect(error).toEqual(new Error('Network error')); 
  }
});
