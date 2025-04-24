const { sum, minus, multiply, divide } = require ('./02-.math');

describe('Test for math', () => {

  describe('Test for sum', () => {
    test('adds 1 + 3 should be 4', () => {
      const res = sum(1,3);
      expect(res).toBe(4);
    });
  });

  describe('Test for minus', () => {
    test('minus 4 - 1 should be 3', () => {
      const res = minus(4,1);
      expect(res).toBe(3);
    });
  });

  describe('Test for multiply', () => {
    test('multiply 4 * 1 should be 4', () => {
      const res = multiply(1,4);
      expect(res).toBe(4);
    });
  });

  describe('Test for divide', () => {
    test('divide 6 / 2 should be 3', () => {
      const res = divide(6,2);
      expect(res).toBe(3);
    });

    test('should devide by 0', () => {
      const res = divide(6,0);
      expect(res).toBeNull();
    });
  });
});
