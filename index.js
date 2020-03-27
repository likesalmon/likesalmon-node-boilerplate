/**
 * index.js
 */
const logger = require('./src/utils/logger');

logger.info('For best results, use logger instead of console.log.', {
  foo: 'bar',
});
