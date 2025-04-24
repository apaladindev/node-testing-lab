describe('Group 1', () => {

  beforeAll(() => {
    console.log('beforeAll');
    // up DB or something required
  });
  afterAll(() => {
    console.log('afterAll');
    // down DB or something required
  });

  beforeEach(() => {
    console.log('beforeEach');
    // up DB or something required
  });

  afterEach(() => {
    console.log('afterEach');
    // down DB or something required
  });

  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });

  test('case 2', () => {
    console.log('case 2');
    expect(1 + 3).toBe(4);
  });

  describe('Group 2', () => {
    beforeAll(() => {
      console.log('beforeAll');
      // up DB or something required
    });

    test('case 3', () => {
      console.log('case 3');
      expect(1 + 1).toBe(2);
    });

    test('case 4', () => {
      console.log('case 4');
      expect(1 + 3).toBe(4);
    });
  });

});
