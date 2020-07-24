/**
 * index.js
 */
const logger = require("./utils/logger");

module.exports = () => {
  logger.info("This is index", { moduleName: "index" });
};
