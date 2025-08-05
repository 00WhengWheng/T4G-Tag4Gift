const { getJestProjects } = require('@nx/jest');

module.exports = {
  projects: getJestProjects(),
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json'],
  coverageDirectory: './coverage',
};
