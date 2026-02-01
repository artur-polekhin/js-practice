const BaseController = require('./BaseController');
const { axiosInstance } = require('./BooksController');

class UserController extends BaseController {

    async login(userName, password) {
        return await this.axiosInstance.post('https://demoqa.com/Account/v1/Login', {
            userName,
            password
        });
    }

    async authorize(userName, password, token) {
        return await axiosInstance.post('Account/v1/Authorized', {
            userName,
            password,
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    async generateToken(userName, password) {
        return await axiosInstance.post('Account/v1/GenerateToken', {
            userName,
            password,
        })
    }

    async generateUserInfo(userId, token) {
        return await axiosInstance.get(`Account/v1/User/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }


}

module.exports = new UserController();