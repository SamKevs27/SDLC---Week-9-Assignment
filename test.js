const { calculateAverage, getGrade } = require('./main');

describe('calculateAverage', () => {
  // ----- VALID CASES -----
  test('valid: calculates average of [80, 90, 100] as 90', () => {
    const result = calculateAverage([80, 90, 100]);
    expect(result).toBeCloseTo(90);
  });

  test('valid: calculates average of [50, 75, 100] as 75', () => {
    const result = calculateAverage([50, 75, 100]);
    expect(result).toBeCloseTo(75);
  });

  // ----- INVALID CASES -----
  test('invalid: throws error when scores array is empty', () => {
    expect(() => calculateAverage([])).toThrow('Scores array must not be empty');
  });

  test('invalid: throws error when scores contain non-numeric value', () => {
    expect(() => calculateAverage([80, '90'])).toThrow(
      'All scores must be valid numbers'
    );
  });
});

describe('getGrade', () => {
  // ----- VALID CASES -----
  test('valid: returns A for average 90', () => {
    const grade = getGrade(90);
    expect(grade).toBe('A');
  });

  test('valid: returns C for average 60', () => {
    const grade = getGrade(60);
    expect(grade).toBe('C');
  });

  // ----- INVALID CASES -----
  test('invalid: throws error when average is not a number', () => {
    expect(() => getGrade('80')).toThrow('Average must be a number');
  });

  test('invalid: throws error when average is out of 0-100 range', () => {
    expect(() => getGrade(120)).toThrow('Average must be between 0 and 100');
  });

  // ----- INTENTIONAL BREAK TEST -----
  // This test is designed to FAIL on purpose to demonstrate CI catching issues.
  test('INTENTIONAL FAIL: expects grade A for average 50 (should NOT be A)', () => {
    const grade = getGrade(50); // with our rules, this should be 'E'
    expect(grade).toBe('A'); // <- intentionally wrong expectation
  });
});
