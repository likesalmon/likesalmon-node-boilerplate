/**
 * Jest Config
 */
module.exports = {
  name: 'node-boilerplate',
  collectCoverageFrom: ['*.js'],
  coveragePathIgnorePatterns: ['node_modules'],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70,
    },
  },
  verbose: false,
  testEnvironment: 'node',
  testPathIgnorePatterns: ['node_modules'],
};
