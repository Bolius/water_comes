import React from "react";
import { create } from "react-test-renderer";
import ReactDOM from "react-dom";
import { Button } from "../components/button.js";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
});

describe("Button component", () => {
  test("it matches the snapshot", () => {
    const component = create(<Button />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
