const { generateManyBooks } = require('../fakes/books.fake');
const BookService = require('./books.service');

const mockSpyGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockSpyGetAll,
  create: () => {},
})));

describe('Test for BookService', () => {
  let service;
  beforeEach(() => {
    service = new BookService();
    jest.clearAllMocks();
  });

  describe('Test for getBooks', () => {
    test('Should return a book list', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(20);
      mockSpyGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockSpyGetAll).toHaveBeenCalled();
      expect(mockSpyGetAll).toHaveBeenCalledWith('books', {});
      expect(mockSpyGetAll).toHaveBeenCalledTimes(1);
    });

    test('Should return a book list', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(5);
      mockSpyGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
