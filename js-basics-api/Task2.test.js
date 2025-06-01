const CustomControllers = require('./custom.js');

const controllers = new CustomControllers();

test('create user with headers', async () => {
  const response = await controllers.createUser('John', 'Developer');

  expect(response.status).toEqual(201); 
  expect(response.data).toHaveProperty('name', 'John');
  expect(response.data).toHaveProperty('job', 'Developer');
  expect(response.data).toHaveProperty('id');    
  expect(response.data).toHaveProperty('createdAt'); 
});
