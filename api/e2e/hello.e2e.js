const request = require('supertest');
const createApp = require('../src/app');

describe('Test for hello enpoint', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(0); // Takes a randomly available server port
  });

  afterAll(async () => {
    await server.close();
  });

  describe('Test for [GET] /', () => {
    test('Should return "Hellow World!"', () => request(app)
      .get('/')
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual('Hello World!');
      }));
  });
});
