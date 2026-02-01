const UserController = require('../../controllers/UserController');
const { users } = require('../../testData/users');

const axios = require('axios').default;

let token;

beforeAll(async () => {
    const responseAuth = await UserController.login(users.user1.userName, users.user1.password)

    const userData = responseAuth.data;
    token = userData.token;
    console.log('Auth performed');
    console.log(`Token: ${token}`);
})

describe('Login', () => {


    test('Success login', async () => {
        const response = await UserController.login(users.user1.userName, users.user1.password);
        const userData = response.data;
        expect(response.status).toBe(200);
    })
    test('Get user info', async () => {
        const response = await UserController.generateUserInfo(users.user1.userId, token)
        const userData = response.data;
        console.log(userData);
        expect(response.status).toBe(200);
    })

    test('Authorize', async () => {
        const response = await UserController.authorize(users.user1.userName, users.user1.password, token)
        const userData = response.data;
        expect(response.status).toBe(200);
    })

    test('Generate Token', async () => {
        const response = await UserController.generateToken(users.user1.userName, users.user1.password)
        expect(response.status).toBe(200);
        expect(response.data.result).toBe("User authorized successfully.");
    })
})