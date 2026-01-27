const axios = require('axios');

test('Get all posts and verify number', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;
    expect(response.status).toBe(200);
    expect(posts).toHaveLength(100)
    expect(posts.length).toBe(100);
})

test('Get first post and verify data', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    const post = response.data;
    expect(response.status).toBe(200);
    expect(post.userId).toBeGreaterThan(0);
    expect(post.id).not.toBe(0);
    expect(post.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
    expect(post.body).toContain('quia et suscipit');
})

test('Get all comments and verify length', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
    const comments = response.data;
    expect(response.status).toBe(200);
    expect(comments).toHaveLength(5);
})


test('Post a new post and verify ID', async () => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts');
    expect(response.status).toBe(201);
    expect(response.data.id).toBe(101);
})

test('Delete post', async () => {
    const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/101');
    expect(response.status).toBe(200);
    const responseType = typeof response.data;
    expect(responseType).toBe('object');
})
