function calculateAverage(scores) {
  if (!Array.isArray(scores)) {
    throw new Error('Scores must be an array');
  }

  if (scores.length === 0) {
    throw new Error('Scores array must not be empty');
  }

  const hasInvalidScore = scores.some(
    (s) => typeof s !== 'number' || Number.isNaN(s)
  );

  if (hasInvalidScore) {
    throw new Error('All scores must be valid numbers');
  }

  const sum = scores.reduce((acc, s) => acc + s, 0);
  return sum / scores.length;
}

function getGrade(average) {
  if (typeof average !== 'number' || Number.isNaN(average)) {
    throw new Error('Average must be a number');
  }

  if (average < 0 || average > 100) {
    throw new Error('Average must be between 0 and 100');
  }

  if (average >= 85) return 'A';
  if (average >= 70) return 'B';
  if (average >= 55) return 'C';
  if (average >= 40) return 'D';
  return 'E';
}

module.exports = {
  calculateAverage,
  getGrade,
};
