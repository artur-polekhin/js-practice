const BooksController = require('../../controllers/BooksController');
const UserController = require('../../controllers/UserController');
const { books } = require('../../testData/books');
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
describe('Get books', () => {
    test('Get all books and verify number', async () => {
        const response = await BooksController.getAllBooks();
        const books = response.data.books;
        expect(books).toHaveLength(8);
        expect(response.status).toBe(200);
    })

    test('Get all books and verify the first book', async () => {
        const response = await BooksController.getAllBooks();
        const books = response.data.books;
        const firstBook = books[0];
        expect(firstBook).toHaveProperty('isbn');
        expect(firstBook.title).toBe('Git Pocket Guide');
        expect(firstBook.subTitle).toBe('A Working Introduction');
        expect(firstBook.author).toBe('Richard E. Silverman');
        expect(response.status).toBe(200);
    })
})

describe('Get one book', () => {
    beforeAll(async () => {
        await BooksController.addBook(users.user1.userId, books[4].isbn, token);
    })
    test('Get one book', async () => {
        const response = await BooksController.getOneBook(books[4].isbn);
        expect(response.status).toBe(200);
        expect(response.data.title).toBe("You Don't Know JS");
    })
})

describe('Add books', () => {

    afterAll(async () => {
        const response = await BooksController.removeBookAllBooks(users.user1.userId, token);
        expect(response.status).toBe(204);
    })

    test("Add 'Git Pocket Guide' book to a user", async () => {
        const response = await BooksController.addBook(users.user1.userId, books[0].isbn, token);

        const responseJSON = response.data;
        expect(responseJSON.books[0].isbn).toBe(books[0].isbn);
        expect(response.status).toBe(201);

    })

    test("Add 'Learning JavaScript Design Patterns' book to a user", async () => {
        const response = await BooksController.addBook(users.user1.userId, books[1].isbn, token);

        const responseJSON = response.data;
        expect(responseJSON.books[0].isbn).toBe(books[1].isbn);
        expect(response.status).toBe(201);
    })

    test("Add 'Designing Evolvable Web APIs with ASP.NET' book to a user", async () => {
        const response = await BooksController.addBook(users.user1.userId, books[2].isbn, token);

        const responseJSON = response.data;
        expect(responseJSON.books[0].isbn).toBe(books[2].isbn);
        expect(response.status).toBe(201);
    })

    test("Add 'Speaking JavaScript' book to a user", async () => {
        const response = await BooksController.addBook(users.user1.userId, books[3].isbn, token);

        const responseJSON = response.data;
        expect(responseJSON.books[0].isbn).toBe(books[3].isbn);
        expect(response.status).toBe(201);
    })

    test("Put 'You Don't Know JS' book to a user", async () => {
        const response = await BooksController.putBook(users.user1.userId, books[3].isbn, token);
        const responseJSON = response.data;
        console.log(response.data);
        expect(response.status).toBe(200);
        expect(responseJSON.books[0].isbn).toBe(books[4].isbn);

    })
})

describe("Remove books", () => {

    beforeAll(async () => {
        await BooksController.addBook(users.user1.userId, books[0].isbn, token);
    })
    test("Remove 'Git Pocket Guide' book", async () => {
        const response = await BooksController.removeBook(books[0].isbn, users.user1.userId, token)
        expect(response.status).toBe(204);

    })
})


