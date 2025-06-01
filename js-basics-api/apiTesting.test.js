const axios = require('axios');
const BASE_URL = 'https://jsonplaceholder.typicode.com';

test('GET /posts should return status 200 and an array', async () => {
  const response = await axios.get(`${BASE_URL}/posts`);
  expect(response.status).toBe(200);
});

test('GET /posts/1 should return status 200 and post with id=1', async () => {
  const response = await axios.get(`${BASE_URL}/posts/1`);
  expect(response.status).toBe(200);
  expect(response.data.id).toBe(1);
});

test('GET /posts/1/comments should return status 200', async () => {
  const response = await axios.get(`${BASE_URL}/posts/1/comments`);
  expect(response.status).toBe(200);
  expect(response.data.length).toBeGreaterThan(0);
});

test('POST /posts should create a new post and return status 201 with title', async () => {
  const newPost = { title: 'foo', body: 'bar', userId: 1 };
  const response = await axios.post(`${BASE_URL}/posts`, newPost);
  expect(response.status).toBe(201);
  expect(response.data.title).toBe(newPost.title);
});

test('POST /comments should create a new comment and return status 201 with comment', async () => {
  const newComment = {
    name: 'Test comment',
    email: 'test@example.com',
    body: 'This is a test comment',
    postId: 1,
  };
  const response = await axios.post(`${BASE_URL}/comments`, newComment);
  expect(response.status).toBe(201);
  expect(response.data.email).toBe(newComment.email);
});
