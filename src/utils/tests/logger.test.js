/**
 * logger tests
 */
const logger = require('../logger');

describe('logger', () => {
  it('should be a logger', async () => {
    expect(logger.constructor.name).toBe('DerivedLogger');
  });
});
