import React from "react";

import { render } from "@testing-library/react";

import DHTag from "./Tag";

describe("DHTag", () => {
  test("renders the Tag component", () => {
    render(<DHTag variant="is-success">Success</DHTag>);
  });
});
