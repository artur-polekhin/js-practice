const axios = require('axios').default;

class BaseController {
    constructor() {
        this.axiosInstance = axios.create({
            validateStatus: () => true,
            baseURL: "https://demoqa.com/"
        })
    }
}

module.exports = BaseController;