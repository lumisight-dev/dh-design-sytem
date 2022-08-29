import React from "react";

import { render } from "@testing-library/react";

import DHView from "./View";

describe("View", () => {
  test("renders the View component", () => {
    render(<DHView isRow>View render</DHView>);
  });
});
