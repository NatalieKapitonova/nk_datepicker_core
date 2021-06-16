import * as Core from "./index";

test("import core", () => {
  expect(typeof Core.CorePicker).toEqual("function");
  expect(typeof Core.Types).toEqual("object");
  expect(typeof Core.UITypes).toEqual("object");
});
