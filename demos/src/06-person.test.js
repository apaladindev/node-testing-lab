const Person = require('./06-person');

describe('Test for Person', () => {
  let person;
  beforeEach(() => {
    person = new Person('Alee', 94, 1.85);
  });

  test('Should return overweight', () => {
    // AAA (Arrange - Act - Assert) - way to write tests
    // Arrange / Given
    // Act / When
    // Assert / Then

    person.weight = 94; // Arrange
    const imc = person.calcIMC(); // Act
    expect(imc).toBe('overweight level 1'); // Assert
  });

  test('Should return normal', () => {
    person.weight = 83;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
