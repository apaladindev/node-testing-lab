const BookService = require('./books.service');

describe('Test for BookService', () => {
  let service;
  beforeEach(() => {
    service = new BookService();
  });

  describe('Test for getBooks', () => {
    test('Should return a book list', async () => {
      // Arrange
      // Act
      const books = await service.getBooks({}); // reading from DB
      console.log(books);
      // Assert
      expect(books.length).toEqual(3);
    });

    test('Should return a book list', async () => {
      // Arrange
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books[0].name).toEqual('Harry Potter');
    });
  });
});
