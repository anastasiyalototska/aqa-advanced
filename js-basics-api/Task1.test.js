
const axios = require('axios');

test('request should fail', async () => {
    try {
        const response = await axios.get("http://api.openweathermap.org/data/2.5/weather?q=London&appid=INVALID_API_KEY");
        console.log(response.data);  
    } catch (error) {
        console.error(error);  
        expect(error.response.status).toBe(401); 
    }
});

