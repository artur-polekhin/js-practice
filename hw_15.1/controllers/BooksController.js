const BaseController = require('./BaseController');

class BooksController extends BaseController {

    async getOneBook(isbn) {
        return await this.axiosInstance.get(`BookStore/v1/Book?ISBN=${isbn}`);
    }

    async getAllBooks() {
        return await this.axiosInstance.get("BookStore/v1/Books");
    }

    async addBook(userId, isbn, token) {
        return await this.axiosInstance.post("BookStore/v1/Books", {
            userId,
            collectionOfIsbns: [
                {
                    isbn
                }
            ]
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    async putBook(userId, isbn, token) {
        return await this.axiosInstance.put(`BookStore/v1/Books?ISBN=${isbn}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }, {
            userId,
            isbn
        },);
    }

    async removeBook(isbn, userId, token) {
        return await this.axiosInstance.delete("BookStore/v1/Book", {
            headers: {
                Authorization: `Bearer ${token}`
            },

            data: {
                isbn,
                userId
            }
        });
    }

    async removeBookAllBooks(userId, token) {
        return await this.axiosInstance.delete(`BookStore/v1/Books?UserId=${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }
}

module.exports = new BooksController();
