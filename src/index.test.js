/**
 *
 *
 * Tests for index
 *
 *
 */
const main = require("./index");

describe("main", () => {
  it("should not error", () => {
    const spy = jest.spyOn(global.console, "error");
    main();
    expect(spy).not.toHaveBeenCalled();
  });
});
